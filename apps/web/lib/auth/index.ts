import { createSupabaseServerClient } from "@/lib/supabase/server";

import { createSupabaseAuthAdapter } from "./supabase-adapter";
import type { AuthPort } from "./types";

export async function getAuth(): Promise<AuthPort> {
  const client = await createSupabaseServerClient();
  return createSupabaseAuthAdapter(client);
}

export type { AuthPort, AuthResult, AuthUser, OAuthResult } from "./types";
