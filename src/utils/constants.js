import { FiActivity } from "react-icons/fi";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoHeadsetOutline, IoHeadsetSharp } from "react-icons/io5";
import { RiSettings4Fill, RiSettings4Line } from "react-icons/ri";

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const accountMenuOptions = [
  {
    name: "Activity",
    href: "/",
    lineIcon: FiActivity,
    filledIcon: FiActivity,
  },
  {
    name: "Workspace",
    href: "/details",
    lineIcon: HiOutlineOfficeBuilding,
    filledIcon: HiOfficeBuilding,
  },
  {
    name: "Settings",
    href: "/settings/password",
    lineIcon: RiSettings4Line,
    filledIcon: RiSettings4Fill,
  },

  {
    name: "Support",
    href: "/account/support",
    lineIcon: IoHeadsetOutline,
    filledIcon: IoHeadsetSharp,
  },
];

export const exploreMenuOptions = [
  {
    name: "Account",
    href: "/account",
    isProtected: true,
  },
  {
    name: "Explore spaces",
    href: "/",
    isProtected: false,
  },
  {
    name: "For teams",
    href: "https://trybase.co/teams",
    isProtected: false,
  },
  {
    name: "Check in to a space",
    href: "/check-in",
    isProtected: false,
  },

  {
    name: "Support",
    href: "/account/support",
    isProtected: true,
  },
];
