import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button";
import Link from "next/link";

export function CreateAccountCard() {
    return(
        <Card>
            <CardHeader>
                <CardTitle>Créer un compte</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Adresse email :</Label>
                    <Input id="email" placeholder="Adresse email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Mot de passe :</Label>
                    <Input id="password" placeholder="Mot de passe" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Confirmer mot de passe :</Label>
                    <Input id="password" placeholder="Confirmer mot de passe" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href="/">
                    <Button variant="outline">Annuler</Button>
                </Link>
                <Button>Valider</Button>
            </CardFooter>
        </Card>
    )
}