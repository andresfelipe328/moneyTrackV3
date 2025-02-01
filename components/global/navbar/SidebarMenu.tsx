import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

import { FaTimes } from "react-icons/fa";
import Backdrop from "@/components/animations/Backdrop";
import CollapseAnim from "@/components/animations/CollapseAnim";
import { NAVLINKS } from "@/utils/navbarlinks";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const SidebarMenu = ({ show, setShow }: Props) => {
  const { status } = useSession();
  const handleDroNav = useCallback(() => {
    const windowSize = window.innerWidth;
    if (show && windowSize > 767) setShow(!show);
  }, [show, setShow]);

  useEffect(() => {
    window.addEventListener("resize", handleDroNav);

    return () => window.removeEventListener("resize", handleDroNav);
  }, [handleDroNav]);
  return (
    <Backdrop>
      <CollapseAnim style="modal-nav">
        <button
          onClick={() => setShow(!show)}
          className="absolute top-10 right-5 scale-100 md:scale-0"
        >
          <FaTimes className="icon" />
        </button>

        <ul className="flex flex-col gap-5">
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
        {status === "authenticated" && (
          <button
            className="absolute bottom-10 right-5"
            onClick={() => signOut({ callbackUrl: "/sign-in" })}
          >
            <small>sign out</small>
          </button>
        )}
      </CollapseAnim>
    </Backdrop>
  );
};
