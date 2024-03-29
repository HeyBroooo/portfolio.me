"use client";
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


  return (
    <NextUINavbar disableAnimation isBordered>
    <NavbarContent className="sm:hidden" justify="start">
      <NavbarMenuToggle />
    </NavbarContent>

    <NavbarContent className="sm:hidden pr-3" justify="center">
      <NavbarBrand>
        <Image src="/logoPortfolio.png" width={50} height={50} alt="Acme Logo" />
       <p className="font-bold text-inherit">Mohit.Dev</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarBrand>
      <Image src="/logoPortfolio.png" width={50} height={50} alt="Acme Logo" />
        <p className="font-bold text-inherit">Mohit.Dev</p>
      </NavbarBrand>
      <NavbarItem>
        <Link color="foreground" href="#">
          Project
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page" color="warning">
          About
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Support
        </Link>
      </NavbarItem>
    </NavbarContent>

    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="warning" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>

    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={
              index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </NextUINavbar>
  );
};


export default Navbar;
