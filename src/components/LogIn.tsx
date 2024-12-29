"use client";

import { useState } from "react";
import { logIn } from "../../utils/supabase/auth";
import { useRouter } from "next/navigation";

const LogIn = ({ session }: { session: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  if (session) {
    router.push("/");
  }

  const handleLogIn = async () => {
    setError(null);
    try {
      const user = await logIn(email, password);
      alert("Login successful!");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <button
          onClick={handleLogIn}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Log In
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default LogIn;