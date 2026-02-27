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
<<<<<<< HEAD
          <NavigationMenuTrigger><Link to="/">Dom</Link></NavigationMenuTrigger>
          <NavigationMenuTrigger><Link to="/eng_history">Engineering Experience</Link></NavigationMenuTrigger>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
=======
          <NavigationMenuTrigger><Link to="/">Home</Link></NavigationMenuTrigger>
          <NavigationMenuTrigger><Link to="/eng_history">Eng. Experience</Link></NavigationMenuTrigger>
          <NavigationMenuTrigger>Eng. Projects</NavigationMenuTrigger>
          <NavigationMenuTrigger>Languages</NavigationMenuTrigger>
          <NavigationMenuTrigger>Previous Career</NavigationMenuTrigger>
>>>>>>> 5b570e3 (Add languages and previous career tabs to nav bar)
          <NavigationMenuTrigger>Volunteer</NavigationMenuTrigger>
          <NavigationMenuTrigger>Hobbies</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
