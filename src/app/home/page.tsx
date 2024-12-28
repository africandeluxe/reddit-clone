import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../utils/supabase/queries";

const Home = () => {
  const { data: posts, error, isLoading } = useQuery(["posts"], fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;