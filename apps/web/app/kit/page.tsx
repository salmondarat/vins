import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";

export const metadata: Metadata = { title: "Jelajahi kit · Vin" };

export default function Page() {
  return (
    <Placeholder
      title="Jelajahi kit"
      note="Halaman ini akan menampilkan katalog kit Gunpla yang bisa dicari dan difilter."
    />
  );
}
