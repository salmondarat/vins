export type AuthUser = {
  id: string;
  email: string | null;
  displayName: string | null;
  username: string | null;
};

export type AuthResult =
  | { success: true; user: AuthUser | null; needsConfirmation?: boolean }
  | { success: false; error: string };

export type OAuthResult =
  | { success: true; url: string }
  | { success: false; error: string };

export type AuthPort = {
  getUser(): Promise<AuthUser | null>;
  signInWithPassword(input: { email: string; password: string }): Promise<AuthResult>;
  signUpWithPassword(input: { email: string; password: string }): Promise<AuthResult>;
  signOut(): Promise<AuthResult>;
  signInWithGoogle(redirectTo: string): Promise<OAuthResult>;
};
