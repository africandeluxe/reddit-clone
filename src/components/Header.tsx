"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-redditOrange text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reddit Clone</h1>
        <nav className="space-x-4">
          <Link href="/log-in" className="hover:underline">
            Log In
          </Link>
          <Link href="/sign-up" className="hover:underline">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;