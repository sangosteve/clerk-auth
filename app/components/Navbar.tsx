"use client";
import React from "react";
import { Bell } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full pr-56  h-12 flex items-center justify-between border border-gray-200 shadow-sm  bg-white">
      <div></div>
      <div className="flex relative items-center">
        <UserButton />
        <Bell size={20} className="mr-4 text-slate-500" />
        <div className="h-9 w-9 rounded-full bg-slate-500"></div>
      </div>
    </nav>
  );
};

export default Navbar;
