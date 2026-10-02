import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";

export const metadata: Metadata = { title: "Cari · Vin" };

export default function Page() {
  return (
    <Placeholder
      title="Cari"
      note="Pencarian build, kit, dan builder akan tersedia di sini."
    />
  );
}
