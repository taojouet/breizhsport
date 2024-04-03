"use client";
import { ArticlesCard } from "@/components/articleCard";
import Image from "next/image";

const article = [{
    id: "0",
    nom: "Raquette",
    image: "/raquette_tennis.webp",
    prix: "135"
},
{
    id: "1",
    nom: "Balles",
    image: "/balles_tennis.jpg",
    prix: "7"
},
{
    id: "2",
    nom: "Antivibrateur",
    image: "/antivibrateur_tennis.webp",
    prix: "9"
},
]

export default function Tennis() {
    return (
        <main>
            <h3 className="text-5xl font-bold text-center mt-5">Tennis</h3>
            <div class="grid grid-cols-4 gap-5 text-center mt-5 items-center mx-10">
                {article.map((article) => (
                    <ArticlesCard id = {article.id} nom = {article.nom} image = {article.image} prix = {article.prix}/>
                ))}
            </div>
        </main>
    );
}