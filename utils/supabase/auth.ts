import { supabase } from "./client";

export const signUp = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return user;
};

export const logIn = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return user;
};

export const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};