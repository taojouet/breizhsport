"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
export function SportsCard(props) {
    return(
        <Card>
        <CardHeader>
          <CardTitle>{props.nom}</CardTitle>
          <CardDescription>Voir les articles disponibles.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
            <Image src={props.image} width={200} height={200}></Image>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Link href={props.nom.toLowerCase()}>
                <Button>Cliquez ici</Button>
            </Link>
        </CardFooter>
      </Card>
    )
}