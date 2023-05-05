import React from "react";
import { CiMail } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { RxPerson } from "react-icons/rx";

export const navItems = [
  {
    title: "Home",
    href: "/",
    icon: <GrHomeRounded className="mr-3 text-2xl" />,
  },
  {
    title: "About",
    href: "/about",
    icon: <RxPerson className="mr-3 text-2xl" />,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <CiMail className="mr-3 stroke-[.3] text-2xl" />,
  }
];
