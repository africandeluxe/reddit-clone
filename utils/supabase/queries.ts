import { createClient } from "./client";
import { Database } from "./database.types";


const supabase = createClient();

export const fetchPosts = async () => {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw new Error(error.message);
  return data;
};

const createPost = async (title: string, content: string, userId: string) => {
  const { data, error } = await supabase
    .from("posts")
    .insert([
      { title, content, user_id: userId },
    ]);

  if (error) throw new Error(error.message);
  return data;
};

const updatePost = async (postId: string, title: string, content: string) => {
  const { data, error } = await supabase
    .from("posts")
    .update({ title, content })
    .eq("id", postId);

  if (error) throw new Error(error.message);
  return data;
};

const deletePost = async (postId: string) => {
  const { data, error } = await supabase
    .from("posts")
    .delete()
    .eq("id", postId);

  if (error) throw new Error(error.message);
  return data;
};

const fetchComments = async (postId: string) => {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("post_id", postId);

  if (error) throw new Error(error.message);
  return data || [];
};

const createComment = async (content: string, postId: string, userId: string) => {
  const { data, error } = await supabase
    .from("comments")
    .insert([
      { content, post_id: postId, user_id: userId },
    ]);

  if (error) throw new Error(error.message);
  return data;
};

const deleteComment = async (commentId: string) => {
  const { data, error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId);

  if (error) throw new Error(error.message);
  return data;
};

export const fetchPostBySlug = async (slug: string) => {
  const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).single();
  if (error) throw new Error(error.message);
  return data;
};


export const fetchPostsWithRelationships = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select(`
      *,
      comments(*),
      users:users!posts_user_id_fkey(*)
    `);

  if (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
  return data || [];
};
