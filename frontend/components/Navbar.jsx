"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingBtn } from "./shoppingCart";
/* import useUserStore from "@/user/userStore"; */
import { useContext } from "react";
import { ShoppingContext } from "@/store/shopping-context";

export function Navbar() {
  const { items } = useContext(ShoppingContext);
  /*   const [pseudo, id] = useUserStore((state) => [state.pseudo, state.id]); */

  const handlelogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="sticky top-0 z-20 w-full">
      <div className="bg-primary">
        {/* <p className="text-white text-center">
          Promotions jusqu'à -50% sur une sélection d'articles
        </p> */}
      </div>
      <div className=" bg-white w-full flex h-14 max-w-screen items-center text-center  border shadow">
        <div className="hidden md:flex m-3 w-full">
          <Link className="flex align-middle" href="/" style={{ width: "12%" }}>
            <p className="mr-6 flex items-center align-middle space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-6 w-6 text-primary"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></circle>

                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  d="M128 48a88 88 0 0 0-88 88c0 56 72 112 88 120 16-8 88-64 88-120a88 88 0 0 0-88-88z"
                ></path>
              </svg>

              <span className="hidden font-bold items-center align-middle sm:inline-block text-primary">
                BreizhSport
              </span>
            </p>
          </Link>
          <nav className="flex items-center justify-center text-center w-full gap-6 text-sm">
            <Link href="/">
              <p className="text-xl transition-colors hover:text-primary text-primary">
                Accueil
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-xl transition-colors hover:text-primary text-primary">
                Contact
              </p>
            </Link>
            <Link href="/more">
              <p className="text-xl transition-colors hover:text-primary text-primary">
                À propos
              </p>
            </Link>
          </nav>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end ">
            {/*   {pseudo ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>{pseudo}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>{pseudo}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profil
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Mes points
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Paramètres
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handlelogOut}>
                      <Link href="/login" className="text-danger">
                        Déconnexion
                      </Link>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <> */}
            <ShoppingBtn items={items} />
            <Link href="/login">
              <Button className="bg-white text-primary border border-primary hover:bg-white">
                {" "}
                Connexion{" "}
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary text-white">
                {" "}
                Inscription{" "}
              </Button>
            </Link>
            {/* </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
