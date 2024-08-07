"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { UserSection } from "@/components/navbar/userSection";

export const Navbar = () => {
  const pathname = usePathname();

  console.log("router", pathname);

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname == item.href}>
            <Link
              className="data-[active=true]:text-primary "
              color={pathname == item.href ? "secondary" : "foreground"}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <UserSection />

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* <UserSection /> */}
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
