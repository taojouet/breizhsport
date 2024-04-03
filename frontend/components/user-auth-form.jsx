"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
/* import { UserApi } from "@/api/UserApi"; */
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
/* import useUserStore from "@/user/userStore"; */
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Vous devez remplir ce champ." })
    .email("Votre mail n'est pas valide."),
  password: z.string().min(2, { message: "Vous devez remplir ce champ." }),
});

export function UserAuthForm({ className, ...props }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  /*   const { updateId, updateEmail, updatePseudo } = useUserStore(); */
  /* 
  const [pseudo, id] = useUserStore((state) => [state.pseudo, state.id]); */

  /*     if (pseudo && id) {
      redirect("/");
    } */

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    try {
      const res = await UserApi.login(data.email, data.password);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        const id = res.data.user.id;
        const email = res.data.user.email;
        const pseudo = res.data.user.name;
        updateId(id);
        updateEmail(email);
        updatePseudo(pseudo);
        router.push("/");
        toast.success("Vous êtes connecté");
      }
    } catch (error) {
      toast.error("Erreur veuillez vérifier vos informations de connexion");
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="arthur@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="xxxxxxxxxx"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="text-white hover:bg-primary"
              disabled={isLoading}
            >
              {/*             {isLoading && (
               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
              Connexion
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou inscrivez vous
          </span>
        </div>
      </div>
      <Link href="/register" className="w-full">
        <Button className="w-full" variant="outline" type="button" disabled={isLoading}>
          Inscription
        </Button>
      </Link>
    </div>
  );
}
