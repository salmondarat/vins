import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";

export const metadata: Metadata = { title: "Profil · Vin" };

export default function Page() {
  return (
    <Placeholder
      title="Profil"
      note="Profil builder, koleksi, dan build yang dipublikasikan akan ada di sini."
    />
  );
}
