"use client";

import { useState } from "react";
import { logIn } from "../../utils/supabase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    try {
      await logIn(email, password);
      alert("Login successful!");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
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
      <button onClick={handleLogIn} className="bg-blue-500 text-white px-4 py-2 rounded">
        Log In
      </button>
    </div>
  );
};

export default LogIn;