"use client";
import { ArticlesCard } from "@/components/articleCard";
import Image from "next/image";

const article = [{
    id: "19",
    nom: "Club",
    image: "/club_golf.webp",
    prix: "75"
},
{
    id: "20",
    nom: "Balles",
    image: "/balles_golf.avif",
    prix: "25"
},
{
    id: "8",
    nom: "Sac chariot",
    image: "/sac_golf.webp",
    prix: "180"
},
]

export default function Golf() {
    return (
        <main>
      
            <h3 className="text-5xl font-bold text-center mt-5">Golf</h3>
            <div class="grid grid-cols-4 gap-5 text-center mt-5 items-center mx-10">
                {article.map((article) => (
                    <ArticlesCard id = {article.id} nom = {article.nom} image = {article.image} prix = {article.prix}/>
                ))}
            </div>
        </main>
    );
}