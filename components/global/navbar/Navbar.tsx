"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAVLINKS } from "@/utils/navbarlinks";
import NavbarAnimLayout from "../../animations/NavbarAnim";
import { Sidebar } from "./Sidebar";
import { HiMenuAlt1 } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarAnimLayout style="navbar">
        <header
          className={`sticky top-0 flex items-center justify-between p-5 default-animation ${
            isScrolled && "shadow-onRest bg-primary/5 backdrop-blur-[2px]"
          }`}
        >
          <Image
            src={"/logo.svg"}
            width={75}
            height={75}
            priority
            alt="Logo"
            className="drop-shadow-md"
            style={{ width: "75px", height: "75px" }}
          />

          <nav className="scale-0 origin-right md:scale-100 default-animation">
            <ul className="flex items-center gap-5">
              {NAVLINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 p-2 rounded-md hover:shadow-onRest default-animation"
                  >
                    <link.icon className="icon" />
                    <small>{link.text}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-[60.88px]">
            {status === "authenticated" && (
              <button
                className="scale-0 origin-right md:scale-100 default-animation"
                onClick={() => signOut({ callbackUrl: "/sign-in" })}
              >
                <small>sign out</small>
              </button>
            )}
          </div>
        </header>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute top-10 right-5 md:scale-0 md:pointer-events-none origin-right"
        >
          <HiMenuAlt1 className="icon" />
        </button>
      </NavbarAnimLayout>
      <Sidebar show={showSidebar} setShow={setShowSidebar} />
    </>
  );
};
