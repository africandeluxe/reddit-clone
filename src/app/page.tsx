import { createClient } from "../../utils/supabase/client";

const supabase = createClient();

const fetchPosts = async () => {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw new Error(error.message);
  return data || [];
};

const Home = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;