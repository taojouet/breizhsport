"use client";
import { ArticlesCard } from "@/components/articleCard";
import Image from "next/image";

const article = [{
    id: "0",
    nom: "Gants",
    image: "/gants_boxe.png",
    prix: "30"
},
{
    id: "1",
    nom: "Bandes poignets",
    image: "/bandes_boxe.webp",
    prix: "9"
},
]

export default function Boxe() {
    return (
        <main>
      
            <h3 className="text-5xl font-bold text-center mt-5">Boxe</h3>
            <div class="grid grid-cols-4 gap-5 text-center mt-5 items-center mx-10">
                {article.map((article) => (
                    <ArticlesCard id = {article.id} nom = {article.nom} image = {article.image} prix = {article.prix}/>
                ))}
            </div>
        </main>
    );
}