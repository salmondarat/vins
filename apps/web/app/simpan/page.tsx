import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";

export const metadata: Metadata = { title: "Simpan · Vin" };

export default function Page() {
  return (
    <Placeholder
      title="Simpan"
      note="Build yang kamu simpan akan muncul di sini setelah masuk."
    />
  );
}
