import { NavbarContent } from "@nextui-org/navbar";
import {
  Button,
  Dropdown,
  DropdownItem,
  User,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/lib/firebaseConfig";

export const UserSection = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <NavbarContent as="div" justify="end">
      {user ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                showFallback: true,
                name: user.displayName || "Usuario",
                isBordered: true,
                src:
                  user.photoURL ||
                  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform"
              description={user.email}
              name={user.displayName || "Usuario"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="log-out" color="danger" onClick={handleLogout}>
              Cerrar Sesion
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <div className="flex gap-3">
          <Button as={Link} color="primary" href="/auth/login" variant="light">
            Login
          </Button>

          <Button
            as={Link}
            color="primary"
            href="/auth/registrarme"
            variant="solid"
          >
            Registrarme
          </Button>
        </div>
      )}
    </NavbarContent>
  );
};
