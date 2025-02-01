import { IconType } from "react-icons";
import { FaChartPie } from "react-icons/fa";
import { MdDashboard, MdCalendarMonth } from "react-icons/md";

interface NavLink {
  icon: IconType;
  text: string;
  href: string;
}

export const NAVLINKS: NavLink[] = [
  {
    icon: MdDashboard,
    text: "dashboard",
    href: "/",
  },
  {
    icon: MdCalendarMonth,
    text: "bills & transactions",
    href: "/bills-transactions",
  },
  {
    icon: FaChartPie,
    text: "reports",
    href: "/reports",
  },
];
