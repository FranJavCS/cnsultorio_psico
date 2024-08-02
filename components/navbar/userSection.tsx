import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Button,
  Dropdown,
  DropdownItem,
  User,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import {
  useSignInWithEmailAndPassword,
  useSignOut,
  useAuthState,
} from "react-firebase-hooks/auth";

export const UserSection = () => {
  const [user] = useAuthState(auth);
  const [signOut, loadingSingOut, errorSingOut] = useSignOut(auth);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <NavbarItem>
      {user ? (
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform"
              description={user.email}
              name="Tony Reichert"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem onClick={handleLogout} key="log-out">
              Cerrar Sesion
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <Button as={Link} color="primary" href="/login" variant="flat">
          Iniciar sesion
        </Button>
      )}
    </NavbarItem>
  );
};
