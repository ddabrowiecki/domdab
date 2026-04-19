import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="ml-2">
            <Link to="/">Home</Link>
          </NavigationMenuTrigger>
          <NavigationMenuTrigger className="ml-2">
            <Link to="/eng_history">Eng. Experience</Link>
          </NavigationMenuTrigger>
          <NavigationMenuTrigger className="ml-2">
            <Link to="/eng_projects">Eng. Projects</Link>
          </NavigationMenuTrigger>
          <NavigationMenuTrigger className="ml-2">
            <Link to="/previous_career">Previous Career</Link>
          </NavigationMenuTrigger>
          <NavigationMenuTrigger className="ml-2">
            <Link to="/languages">Languages</Link>
          </NavigationMenuTrigger>
          <NavigationMenuTrigger className="ml-2">
            <Link to="/education">Education</Link>
          </NavigationMenuTrigger>
          <NavigationMenuTrigger className="ml-2">
            <Link to="/volunteer">Volunteer</Link>
          </NavigationMenuTrigger>
          {/* <NavigationMenuTrigger className="ml-2">Hobbies</NavigationMenuTrigger> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
