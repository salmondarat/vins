import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  // generate works without a database. migrate and push need a real
  // DATABASE_URL from .env.local (see .env.example).
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
});
