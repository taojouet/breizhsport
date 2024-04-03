"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
/* import { UserApi } from "@/api/UserApi"; */

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Vous devez remplir ce champ." })
      .email("Votre mail n'est pas valide."),
    /* .refine((e) => e === "abcd@fg.com", "test"), */

    pseudo: z.string().min(2, {
      message: "Votre nom doit contenir au moins 2 caractères.",
    }),
    password: z.string().min(4),
    passwordRetype: z.string().min(4),
  })
  .superRefine(({ passwordRetype, password }, ctx) => {
    if (passwordRetype !== password) {
      ctx.addIssue({
        code: "custom",
        path: ["passwordRetype"],
        message: "Votre mot de passe ne correspond pas.",
      });
    }
  });

export function UserRegisterForm({ className, ...props }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pseudo: "",
      email: "",
      password: "",
      passwordRetype: "",
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    console.log(data);
    try {
      const res = await UserApi.register(
        data.email,
        data.pseudo,
        data.password,
        data.passwordRetype
      );
      if (res.status === 200) {
        toast.success("Vous êtes bien inscrit");
      }
    } catch (error) {
      toast.error("Erreur lors de votre inscription");
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="pseudo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input
                        id="pseudo"
                        placeholder="name"
                        type="pseudo"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="********"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="passwordRetype"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Retapez mot de passe</FormLabel>
                    <FormControl>
                      <Input
                        id="passwordRetype"
                        placeholder="********"
                        type="password"
                        autoCapitalize="none"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <Button
              className="text-white hover:bg-primary"
              disabled={isLoading}
            >
              {/*             {isLoading && (
               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
              S'incrire avec Email
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
            Ou connecter vous
          </span>
        </div>
      </div>
      <Link href="/login" className="w-full">
        <Button
        className="w-full"
          href="/login"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          Connexion
        </Button>
      </Link>
    </div>
  );
}
