import { useRouter } from "next/router";
import {
  RiHome5Fill,
  RiHome5Line,
  RiSettings4Fill,
  RiSettings4Line,
  RiUserFill,
  RiUserLine,
  RiWallet3Fill,
  RiWallet3Line,
} from "react-icons/ri";

const menuOptions = [
  {
    name: "Activity",
    href: "/account",
    lineIcon: RiHome5Line,
    filledIcon: RiHome5Fill,
  },
  {
    name: "My team",
    href: "/account/team",
    lineIcon: RiUserLine,
    filledIcon: RiUserFill,
  },
  {
    name: "Subscription",
    href: "/account/subscription",
    lineIcon: RiWallet3Line,
    filledIcon: RiWallet3Fill,
  },
  {
    name: "Settings",
    href: "/account/settings",
    lineIcon: RiSettings4Line,
    filledIcon: RiSettings4Fill,
  },
];

export default function useActivitiesHook() {
  const { asPath } = useRouter();

  return { menuOptions, path: asPath };
}
