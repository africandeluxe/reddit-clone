"use client";

import { useState } from "react";
import { signUp } from "../../utils/supabase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert("Sign-up successful! Check your email for confirmation.");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
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
      <button onClick={handleSignUp} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;