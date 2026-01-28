<<<<<<< Updated upstream
=======
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><Link to="/">Home</Link></NavigationMenuTrigger>
          <NavigationMenuTrigger><Link to="/eng_history">Engineering Experience</Link></NavigationMenuTrigger>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuTrigger>Volunteer</NavigationMenuTrigger>
          <NavigationMenuTrigger>Hobbies</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
>>>>>>> Stashed changes
