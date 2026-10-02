import type { AuthPort, AuthResult, AuthUser, OAuthResult } from "./types";

/** Only the slice of the Supabase client the adapter touches. */
type AuthClient = { auth: SupabaseAuthApi };

type SupabaseAuthApi = {
  getUser(): Promise<{ data: { user: RawUser | null } }>;
  signInWithPassword(input: {
    email: string;
    password: string;
  }): Promise<{ data: { user: RawUser | null }; error: AuthApiError | null }>;
  signUp(input: {
    email: string;
    password: string;
  }): Promise<{
    data: { user: RawUser | null; session: unknown };
    error: AuthApiError | null;
  }>;
  signOut(): Promise<{ error: AuthApiError | null }>;
  signInWithOAuth(input: {
    provider: "google";
    options: { redirectTo: string };
  }): Promise<{ data: { url?: string | null }; error: AuthApiError | null }>;
};

type RawUser = {
  id: string;
  email?: string | null;
  user_metadata?: Record<string, unknown> | null;
};

type AuthApiError = { message: string } | null;

function toAuthUser(user: RawUser | null): AuthUser | null {
  if (!user) return null;
  const metadata = user.user_metadata ?? {};
  const displayName =
    typeof metadata.display_name === "string" ? metadata.display_name : null;
  const username =
    typeof metadata.username === "string" ? metadata.username : null;

  return {
    id: user.id,
    email: user.email ?? null,
    displayName,
    username,
  };
}

/**
 * The only module allowed to touch Supabase Auth. Feature code depends on
 * AuthPort, so a later move off managed Supabase changes this file only.
 */
export function createSupabaseAuthAdapter(client: AuthClient): AuthPort {
  return {
    async getUser() {
      const { data } = await client.auth.getUser();
      return toAuthUser(data.user);
    },

    async signInWithPassword(input): Promise<AuthResult> {
      const { data, error } = await client.auth.signInWithPassword(input);
      if (error) return { success: false, error: error.message };
      return { success: true, user: toAuthUser(data.user) };
    },

    async signUpWithPassword(input): Promise<AuthResult> {
      const { data, error } = await client.auth.signUp(input);
      if (error) return { success: false, error: error.message };
      const needsConfirmation = data.user !== null && data.session === null;
      return { success: true, user: toAuthUser(data.user), needsConfirmation };
    },

    async signOut(): Promise<AuthResult> {
      const { error } = await client.auth.signOut();
      if (error) return { success: false, error: error.message };
      return { success: true, user: null };
    },

    async signInWithGoogle(redirectTo): Promise<OAuthResult> {
      const { data, error } = await client.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo },
      });
      if (error) return { success: false, error: error.message };
      return { success: true, url: data.url ?? redirectTo };
    },
  };
}
