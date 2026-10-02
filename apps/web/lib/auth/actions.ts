"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getAuth } from "@/lib/auth";

export type AuthFormState = { error?: string; notice?: string };

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MIN_PASSWORD_LENGTH = 8;

function readCredentials(formData: FormData) {
  return {
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
  };
}

function validateCredentials(email: string, password: string): string | null {
  if (!EMAIL_PATTERN.test(email)) {
    return "Masukkan email yang valid.";
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return "Kata sandi minimal 8 karakter.";
  }
  return null;
}

async function readOrigin(): Promise<string> {
  const headerList = await headers();
  return (
    headerList.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000"
  );
}

export async function signInAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const { email, password } = readCredentials(formData);
  const invalid = validateCredentials(email, password);
  if (invalid) return { error: invalid };

  const auth = await getAuth();
  const result = await auth.signInWithPassword({ email, password });
  if (!result.success) return { error: result.error };

  redirect("/");
}

export async function signUpAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const { email, password } = readCredentials(formData);
  const invalid = validateCredentials(email, password);
  if (invalid) return { error: invalid };

  const auth = await getAuth();
  const result = await auth.signUpWithPassword({ email, password });
  if (!result.success) return { error: result.error };
  if (result.needsConfirmation) {
    return { notice: "Cek email kamu untuk konfirmasi pendaftaran." };
  }

  redirect("/");
}

export async function googleSignInAction(): Promise<AuthFormState> {
  const auth = await getAuth();
  const origin = await readOrigin();
  const result = await auth.signInWithGoogle(`${origin}/auth/callback`);
  if (!result.success) return { error: result.error };

  redirect(result.url);
}

export async function signOutAction(): Promise<void> {
  const auth = await getAuth();
  await auth.signOut();
  redirect("/");
}
