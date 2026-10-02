import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

export type Database = PostgresJsDatabase<typeof schema>;

export function createDb(url: string): Database {
  return drizzle(postgres(url), { schema });
}

let instance: Database | undefined;

export function getDb(): Database {
  if (instance) return instance;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL belum diisi. Tambahkan DATABASE_URL beserta NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY di apps/web/.env.local, lalu jalankan ulang server.",
    );
  }
  instance = createDb(url);
  return instance;
}
