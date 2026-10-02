import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";

export const metadata: Metadata = { title: "Jelajahi builder · Vin" };

export default function Page() {
  return (
    <Placeholder
      title="Jelajahi builder"
      note="Halaman ini akan menampilkan profil builder dan karya mereka."
    />
  );
}
