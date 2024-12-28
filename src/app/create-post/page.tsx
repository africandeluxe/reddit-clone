const CreatePost = () => {
  const supabase = createClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { user } = await supabase.auth.getUser();
    if (!user) return alert("You must be logged in!");

    const { error } = await supabase
      .from("posts")
      .insert([{ title, content, slug: title.toLowerCase().replace(/\s+/g, "-"), user_id: user.id }]);
    if (error) alert(error.message);
    else alert("Post created successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;