import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-slate-200">
      <nav className="flex justify-center text-xl font-semibold gap-3">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};
