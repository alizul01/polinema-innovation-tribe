import type {UserNavigationType} from "~/types/Navigation/UserNavigationType";
import UserCircleIcon from "~icons/heroicons/user-circle-solid";
import Gear from "~icons/heroicons/cog-6-tooth-solid";
import LightBulb from "~icons/heroicons/light-bulb-solid";
import ArrowLeft from "~icons/heroicons/arrow-left-on-rectangle-solid";
const UserNavigation: UserNavigationType[] = [
  {
    name: "My Idea",
    url: "/user/idea",
    icon: <LightBulb />
  },
  {
    name: "My Profile",
    url: "/user/profile",
    icon: <UserCircleIcon />
  },
  {
    name: "Settings",
    url: "/user/setting",
    icon: <Gear />
  },
  {
    name: "Log Out",
    url: "/user/logout",
    icon: <ArrowLeft />
  }
];

export default UserNavigation;