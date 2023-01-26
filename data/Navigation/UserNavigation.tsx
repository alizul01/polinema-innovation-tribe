import type { UserNavigationType } from "~/types/Navigation/UserNavigationType";
import { HiUserCircle as UserCircleIcon } from "react-icons/hi2";
import { HiCog6Tooth as Gear } from "react-icons/hi2";
import { HiLightBulb as LightBulb } from "react-icons/hi2";
import { HiArrowLeftOnRectangle as ArrowLeft } from "react-icons/hi2";

const UserNavigation: UserNavigationType[] = [
  {
    name: "My Idea",
    url: "/user/idea",
    icon: <LightBulb />,
  },
  {
    name: "My Profile",
    url: "/user/profile",
    icon: <UserCircleIcon />,
  },
  {
    name: "Settings",
    url: "/user/setting",
    icon: <Gear />,
  },
  {
    name: "Log Out",
    url: "/user/logout",
    icon: <ArrowLeft />,
  },
];

export default UserNavigation;
