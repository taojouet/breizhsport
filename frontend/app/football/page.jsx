"use client";
import { ArticlesCard } from "@/components/articleCard";
import Image from "next/image";

const article = [{
    id: "0",
    nom: "Ballon",
    image: "/ballon_foot.avif",
    prix: "40"
},
{
    id: "1",
    nom: "Gants",
    image: "/gants_foot.avif",
    prix: "40"
},
{
    id: "2",
    nom: "Ensemble",
    image: "/ensemble_foot.png",
    prix: "70"
},
{
    id: "3",
    nom: "Chaussures",
    image: "/chaussures_football.avif",
    prix: "60"
},
]

export default function Football() {
    return (
        <main>
      
            <h3 className="text-5xl font-bold text-center mt-5">Football</h3>
            <div class="grid grid-cols-4 gap-5 text-center mt-5 items-center mx-10">
                {article.map((article) => (
                    <ArticlesCard id = {article.id} nom = {article.nom} image = {article.image} prix = {article.prix}/>
                ))}
            </div>
        </main>
    );
}