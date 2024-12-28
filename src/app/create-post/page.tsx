"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase/client";

const CreatePost = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-bold">You must be logged in to create a post.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      {/* Add your create post form here */}
    </div>
  );
};

export default CreatePost;