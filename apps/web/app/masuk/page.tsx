import type { Metadata } from "next";

import { SignInForm } from "@/app/masuk/sign-in-form";

export const metadata: Metadata = { title: "Masuk · Vin" };

export default function MasukPage() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 py-16 md:px-6">
      <div className="mx-auto grid w-full max-w-sm gap-6 rounded-lg border border-border bg-card p-6">
        <header className="grid gap-1">
          <h1 className="text-xl font-semibold tracking-tight">
            Masuk ke Vin
          </h1>
          <p className="text-sm text-muted-foreground">
            Untuk membagikan dan menyimpan build.
          </p>
        </header>
        <SignInForm />
      </div>
    </section>
  );
}
