import { supabase } from "./client";

export const signUp = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Sign Up Error:", error.message);
      throw new Error(error.message);
    }

    return data.user;
  } catch (err: any) {
    throw new Error(`Sign-up failed: ${err.message}`);
  }
};

export const logIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login Error:", error?.message || "Unknown error occurred");
    throw new Error(error?.message || "Login failed");
  }

  return data?.user;
};

export const logOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout Error:", error.message);
      throw new Error(error.message);
    }
  } catch (err: any) {
    throw new Error(`Logout failed: ${err.message}`);
  }
};