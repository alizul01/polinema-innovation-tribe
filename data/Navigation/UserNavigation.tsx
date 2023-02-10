import type { UserNavigationType } from "~/types/Navigation/UserNavigationType";
import { HiCog6Tooth as Gear, HiLightBulb as LightBulb, HiArrowLeftOnRectangle as ArrowLeft, HiUserCircle as UserCircleIcon} from "react-icons/hi2";

const UserNavigation: UserNavigationType[] = [
  {
    name: "My Idea",
    url: "/user/idea",
    icon: <LightBulb />,
    isForbidden: true,
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
    isForbidden: true,
  },
  {
    name: "Log Out",
    url: "/user/logout",
    icon: <ArrowLeft />,
  },
];

export default UserNavigation;
