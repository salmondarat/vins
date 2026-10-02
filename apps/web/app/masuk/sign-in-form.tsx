"use client";

import { useActionState, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  googleSignInAction,
  signInAction,
  signUpAction,
  type AuthFormState,
} from "@/lib/auth/actions";

const INITIAL_STATE: AuthFormState = {};

export function SignInForm() {
  const [mode, setMode] = useState<"masuk" | "daftar">("masuk");
  const [signInState, submitSignIn, signInPending] = useActionState(
    signInAction,
    INITIAL_STATE,
  );
  const [signUpState, submitSignUp, signUpPending] = useActionState(
    signUpAction,
    INITIAL_STATE,
  );
  const [googleState, submitGoogle, googlePending] = useActionState(
    googleSignInAction,
    INITIAL_STATE,
  );

  const activeState = mode === "masuk" ? signInState : signUpState;
  const error = activeState.error ?? googleState.error;
  const notice = activeState.notice;
  const pending = signInPending || signUpPending || googlePending;

  return (
    <div className="grid gap-4">
      <form action={mode === "masuk" ? submitSignIn : submitSignUp} className="grid gap-4">
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="nama@email.com"
            className="h-11"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="password" className="text-sm font-medium">
            Kata sandi
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete={mode === "masuk" ? "current-password" : "new-password"}
            required
            minLength={8}
            placeholder="Minimal 8 karakter"
            className="h-11"
          />
        </div>

        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
        {notice ? (
          <p role="status" className="text-sm text-muted-foreground">
            {notice}
          </p>
        ) : null}

        <Button type="submit" className="h-11" disabled={pending} aria-busy={pending}>
          {mode === "masuk" ? "Masuk" : "Daftar"}
        </Button>
      </form>

      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-[11px] text-muted-foreground">atau</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <form action={submitGoogle}>
        <Button
          type="submit"
          variant="outline"
          className="h-11 w-full"
          disabled={pending}
          aria-busy={googlePending}
        >
          Lanjut dengan Google
        </Button>
      </form>

      <button
        type="button"
        onClick={() => setMode(mode === "masuk" ? "daftar" : "masuk")}
        className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {mode === "masuk"
          ? "Belum punya akun? Daftar"
          : "Sudah punya akun? Masuk"}
      </button>
    </div>
  );
}
