import { createClient } from "./client";
import { Database } from "./database.types";


const supabase = createClient();

export const fetchPosts = async () => {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const fetchPostBySlug = async (slug: string) => {
  const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).single();
  if (error) throw new Error(error.message);
  return data;
};

export const createPost = async (title: string, content: string, user_id: string) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const { error } = await supabase
    .from("posts")
    .insert([{ title, content, slug, user_id }]);
  if (error) throw new Error(error.message);
};