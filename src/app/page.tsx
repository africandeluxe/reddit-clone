"use client"
import { fetchPostsWithRelationships } from "../../utils/supabase/queries";
import { createClient } from "../../utils/supabase/client";

const supabase = createClient();

const fetchPosts = async () => {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw new Error(error.message);
  return data || [];
};

const Home = async () => {
  const posts = await fetchPostsWithRelationships();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-redditOrange text-white p-4">
        <h1 className="text-2xl font-bold">Reddit Clone</h1>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow p-4 mb-4">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <div className="mt-4 text-gray-600">
              <h3 className="font-bold">Comments:</h3>
              {post.comments.length > 0 ? (
                post.comments.map((comment) => (
                  <div key={comment.id} className="pl-4 border-l border-gray-300">
                    <p>{comment.content}</p>
                    <p className="text-sm text-gray-500">
                      By User ID: {comment.user_id}
                    </p>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;