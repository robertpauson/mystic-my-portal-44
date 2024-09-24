import { HomeIcon, BriefcaseIcon, UsersIcon, EyeIcon, RepeatIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Career from "./pages/Career.jsx";
import SocialConnections from "./pages/SocialConnections.jsx";
import UniquePerspective from "./pages/UniquePerspective.jsx";
import Incarnations from "./pages/Incarnations.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Career",
    to: "/career",
    icon: <BriefcaseIcon className="h-4 w-4" />,
    page: <Career />,
  },
  {
    title: "Social Connections",
    to: "/social-connections",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <SocialConnections />,
  },
  {
    title: "Unique Perspective",
    to: "/unique-perspective",
    icon: <EyeIcon className="h-4 w-4" />,
    page: <UniquePerspective />,
  },
  {
    title: "Incarnations",
    to: "/incarnations",
    icon: <RepeatIcon className="h-4 w-4" />,
    page: <Incarnations />,
  },
];
