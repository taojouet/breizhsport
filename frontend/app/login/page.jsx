/* import { Metadata } from "next" */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { UserAuthForm } from "../../components/user-auth-form";

/* export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
} */

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden flex h-100 z-1 ">
        <Image
          src="/login.jpg"
          width={1280}
          height={843}
          alt="Authentication"
          /* className="block dark:hidden" */
        />
      </div>
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Image
            src={"/login.jpg"}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            BreizhSport
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg font-bold bg-black bg-opacity-60">
                &ldquo;Explorez
                notre gamme d'équipements et d'accessoires de sport pour répondre à vos besoins sportifs. Bienvenue sur notre terrain
                de jeu.&rdquo;
              </p>
              <footer className="text-sm font-bold">BreizhSport</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Se connecter
              </h1>
              <p className="text-sm text-muted-foreground">
              Accédez à tous vos achats, services et applications BreizhSport.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
