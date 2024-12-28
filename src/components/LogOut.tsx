"use client";

import { logOut } from "../../utils/supabase/auth";

const LogOut = () => {
  const handleLogOut = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <button onClick={handleLogOut} className="bg-red-500 text-white px-4 py-2 rounded">
      Log Out
    </button>
  );
};

export default LogOut;