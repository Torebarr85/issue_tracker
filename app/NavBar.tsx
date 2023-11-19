"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b items-center h-14 mb-3 px-3">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-3">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
            href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
