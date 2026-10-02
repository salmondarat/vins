import type { Metadata } from "next";

import { Placeholder } from "@/components/placeholder";

export const metadata: Metadata = { title: "Masuk · Vin" };

export default function Page() {
  return (
    <Placeholder
      title="Masuk"
      note="Masuk dengan email atau Google agar bisa membagikan dan menyimpan build."
    />
  );
}
