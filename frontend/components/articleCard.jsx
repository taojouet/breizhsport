"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ShoppingContext } from "@/store/shopping-context";

export function ArticlesCard(props) {
  const { items, addItem } = useContext(ShoppingContext);
  const handleClick = () => {
    addItem({
      id: props.id,
      nom: props.nom,
      prix: parseInt(props.prix),
      image: props.image
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-5">{props.nom}</CardTitle>
        <CardDescription className="flex justify-center">
          <Image src={props.image} width={200} height={200}></Image>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <p className="bg-yellow-300 font-bold mr-3">{props.prix} €</p>
      </CardContent>
      <CardFooter className="flex justify-center">
          <Button onClick={handleClick}>Ajouter au panier</Button>
      </CardFooter>
    </Card>
  );
}
