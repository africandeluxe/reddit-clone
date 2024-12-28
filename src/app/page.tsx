"use client";
import { fetchPostsWithRelationships } from "../../utils/supabase/queries";

const Home = async () => {
  let posts = [];

  try {
    posts = await fetchPostsWithRelationships();
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500 font-bold">Failed to load posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-redditOrange text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Reddit Clone</h1>
      </header>

      <main className="flex-grow p-4 md:p-8 max-w-4xl mx-auto">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow p-4 mb-4">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.content}</p>
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
          ))
        ) : (
          <p className="text-center text-gray-500">No posts found.</p>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="max-w-5xl mx-auto text-center text-sm">© 2024 Reddit Clone. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Home;