import {
  NavigationMenu,
  NavigationMenuItem,
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
          <NavigationMenuTrigger><Link to="/eng_history">Eng. Experience</Link></NavigationMenuTrigger>
          <NavigationMenuTrigger>Eng. Projects</NavigationMenuTrigger>
          <NavigationMenuTrigger>Previous Career</NavigationMenuTrigger>
          <NavigationMenuTrigger>Languages</NavigationMenuTrigger>
          <NavigationMenuTrigger>Volunteer</NavigationMenuTrigger>
          <NavigationMenuTrigger>Hobbies</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
