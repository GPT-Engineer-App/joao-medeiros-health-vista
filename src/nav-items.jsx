import { Home, User, TrendingUp, TrendingDown, Compass } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Strengths",
    to: "/#strengths",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    title: "Weaknesses",
    to: "/#weaknesses",
    icon: <TrendingDown className="h-4 w-4" />,
  },
  {
    title: "Future",
    to: "/#future",
    icon: <Compass className="h-4 w-4" />,
  },
];
