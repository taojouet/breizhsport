"use client";
import { ArticlesCard } from "@/components/articleCard";
import Image from "next/image";

const article = [{
    id: "15",
    nom: "Ballon",
    image: "/ballon_rugby.avif",
    prix: "35"
},
{
    id: "16",
    nom: "Casque",
    image: "/casque_rugby.avif",
    prix: "55"
},
{
    id: "17",
    nom: "Chaussures",
    image: "/chaussures_rugby.avif",
    prix: "70"
},
{
    id: "18",
    nom: "Chaussettes",
    image: "/chaussettes_rugby.avif",
    prix: "6"
},
]

export default function Rugby() {
    return (
        <main>
      
            <h3 className="text-5xl font-bold text-center mt-5">Rugby</h3>
            <div class="grid grid-cols-4 gap-5 text-center mt-5 items-center mx-10">
                {article.map((article) => (
                    <ArticlesCard id = {article.id} nom = {article.nom} image = {article.image} prix = {article.prix}/>
                ))}
            </div>
        </main>
    );
}