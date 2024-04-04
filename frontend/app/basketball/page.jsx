"use client";
import { ArticlesCard } from "@/components/articleCard";
import Image from "next/image";

const article = [{
    id: "6",
    nom: "Ballon",
    image: "/ballon_basket.jpg",
    prix: "70"
},
{
    id: "7",
    nom: "Chaussures",
    image: "/chaussures_basket.png",
    prix: "110"
},
{
    id: "8",
    nom: "Bandeau",
    image: "/bandeau_basket.jpg",
    prix: "10"
},
]

export default function Basketball() {
    return (
        <main>
      
            <h3 className="text-5xl font-bold text-center mt-5">Basketball</h3>
            <div class="grid grid-cols-4 gap-5 text-center mt-5 items-center mx-10">
                {article.map((article) => (
                    <ArticlesCard id = {article.id} nom = {article.nom} image = {article.image} prix = {article.prix}/>
                ))}
            </div>
        </main>
    );
}