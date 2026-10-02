-- Profile bootstrap, row level security, and taxonomy seeds.
-- See documents/development/03-erd.md and ADR-003/ADR-004.

-- ---------------------------------------------------------------------------
-- 1. Create an app profile row whenever a Supabase Auth user signs up.
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = 'public'
as $$
begin
  insert into public.profiles (id, username, display_name)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'username',
      split_part(coalesce(new.email, 'builder'), '@', 1)
    ) || '-' || substr(replace(new.id::text, '-', ''), 1, 6),
    coalesce(
      new.raw_user_meta_data ->> 'display_name',
      split_part(coalesce(new.email, 'builder'), '@', 1)
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- 2. Row level security.
--    Public can read published builds. Owners manage their own rows.
--    Taxonomy tables are read-only for clients (service role writes).
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.product_statuses enable row level security;
alter table public.series enable row level security;
alter table public.grades enable row level security;
alter table public.build_styles enable row level security;
alter table public.techniques enable row level security;
alter table public.kits enable row level security;
alter table public.builds enable row level security;
alter table public.build_photos enable row level security;
alter table public.build_style_links enable row level security;
alter table public.build_technique_links enable row level security;
alter table public.reports enable row level security;
alter table public.moderation_actions enable row level security;
alter table public.saved_builds enable row level security;

-- profiles: public read, owner write
create policy "profiles_select_public" on public.profiles
  for select using (true);
create policy "profiles_insert_own" on public.profiles
  for insert with check (id = auth.uid());
create policy "profiles_update_own" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

-- taxonomy: public read only
create policy "product_statuses_select_public" on public.product_statuses
  for select using (true);
create policy "series_select_public" on public.series
  for select using (true);
create policy "grades_select_public" on public.grades
  for select using (true);
create policy "build_styles_select_public" on public.build_styles
  for select using (true);
create policy "techniques_select_public" on public.techniques
  for select using (true);
create policy "kits_select_public" on public.kits
  for select using (true);

-- builds: published are public, owners manage their own
create policy "builds_select_published_or_own" on public.builds
  for select using (status = 'published' or author_id = auth.uid());
create policy "builds_insert_own" on public.builds
  for insert with check (author_id = auth.uid());
create policy "builds_update_own" on public.builds
  for update using (author_id = auth.uid()) with check (author_id = auth.uid());
create policy "builds_delete_own" on public.builds
  for delete using (author_id = auth.uid());

-- build_photos: visible when the parent build is visible
create policy "build_photos_select_when_build_visible" on public.build_photos
  for select using (
    exists (
      select 1 from public.builds b
      where b.id = build_id
        and (b.status = 'published' or b.author_id = auth.uid())
    )
  );
create policy "build_photos_insert_own_build" on public.build_photos
  for insert with check (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  );
create policy "build_photos_update_own_build" on public.build_photos
  for update using (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  ) with check (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  );
create policy "build_photos_delete_own_build" on public.build_photos
  for delete using (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  );

-- style and technique links: follow the parent build's visibility
create policy "build_style_links_select_when_build_visible" on public.build_style_links
  for select using (
    exists (
      select 1 from public.builds b
      where b.id = build_id
        and (b.status = 'published' or b.author_id = auth.uid())
    )
  );
create policy "build_style_links_write_own_build" on public.build_style_links
  for insert with check (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  );
create policy "build_style_links_delete_own_build" on public.build_style_links
  for delete using (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  );

create policy "build_technique_links_select_when_build_visible" on public.build_technique_links
  for select using (
    exists (
      select 1 from public.builds b
      where b.id = build_id
        and (b.status = 'published' or b.author_id = auth.uid())
    )
  );
create policy "build_technique_links_write_own_build" on public.build_technique_links
  for insert with check (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  );
create policy "build_technique_links_delete_own_build" on public.build_technique_links
  for delete using (
    exists (
      select 1 from public.builds b
      where b.id = build_id and b.author_id = auth.uid()
    )
  );

-- reports: authenticated users file reports and read their own
create policy "reports_insert_own" on public.reports
  for insert with check (reporter_id = auth.uid());
create policy "reports_select_own" on public.reports
  for select using (reporter_id = auth.uid());

-- moderation_actions and saved_builds have no public write path here:
-- moderation is service role only, saves are owner only.
create policy "saved_builds_select_own" on public.saved_builds
  for select using (profile_id = auth.uid());
create policy "saved_builds_insert_own" on public.saved_builds
  for insert with check (profile_id = auth.uid());
create policy "saved_builds_delete_own" on public.saved_builds
  for delete using (profile_id = auth.uid());

-- ---------------------------------------------------------------------------
-- 3. Taxonomy seeds. Small MVP set, idempotent.
-- ---------------------------------------------------------------------------
insert into public.product_statuses (code, label, is_counterfeit, sort_order) values
  ('official', 'Resmi', false, 1),
  ('third_party', 'Pihak ketiga', false, 2),
  ('bootleg', 'Bootleg / KW', true, 3)
on conflict (code) do nothing;

insert into public.grades (name, slug, scale, sort_order) values
  ('Entry Grade', 'eg', null, 1),
  ('High Grade', 'hg', '1/144', 2),
  ('Real Grade', 'rg', '1/144', 3),
  ('Master Grade', 'mg', '1/100', 4),
  ('Perfect Grade', 'pg', '1/60', 5),
  ('SD Grade', 'sd', null, 6)
on conflict (slug) do nothing;

insert into public.series (name, slug, sort_order) values
  ('Universal Century', 'universal-century', 1),
  ('Gundam SEED', 'seed', 2),
  ('Gundam 00', 'gundam-00', 3),
  ('Iron-Blooded Orphans', 'iron-blooded-orphans', 4),
  ('The Witch from Mercury', 'witch-from-mercury', 5),
  ('Gundam Wing', 'gundam-wing', 6)
on conflict (slug) do nothing;

insert into public.build_styles (name, slug, sort_order) values
  ('Clean', 'clean', 1),
  ('Weathered', 'weathered', 2),
  ('Glossy', 'glossy', 3),
  ('Matte', 'matte', 4),
  ('Battle damaged', 'battle-damaged', 5)
on conflict (slug) do nothing;

insert into public.techniques (name, slug, sort_order) values
  ('Panel lining', 'panel-lining', 1),
  ('Topcoat', 'topcoat', 2),
  ('Scribing', 'scribing', 3),
  ('Airbrush', 'airbrush', 4),
  ('Hand paint', 'hand-paint', 5),
  ('Decals', 'decals', 6)
on conflict (slug) do nothing;
