import { supabase } from "../../../utils/supabase/client";
import LogIn from "@/components/LogIn";

export default async function LogInPage() {
  const { data } = await supabase.auth.getSession();

  return <LogIn session={data?.session} />;
}