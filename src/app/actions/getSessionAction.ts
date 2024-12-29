"use server";

import { supabase } from "../../../utils/supabase/client";

export const getSession = async () => {
  const { data } = await supabase.auth.getSession();
  return data?.session;
};