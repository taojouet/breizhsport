"use client";
import { SportsCard } from "@/components/sportsCard";
import Head from "next/head";
import Image from "next/image";

const sport = [{
  id: "0",
  nom: "Tennis",
  image: "/tennis.webp",
},
{
  id: "1",
  nom: "Football",
  image: "/football.png"
},
{
  id: "2",
  nom: "Basketball",
  image: "/basketball.jpg"
},
{
  id: "3",
  nom: "Boxe",
  image: "/boxe.jpg"
},
{
  id: "4",
  nom: "Rugby",
  image: "/rugby.webp"
},
{
  id: "5",
  nom: "Golf",
  image: "/golf.webp"
},

]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-5">
      <h1 className="text-5xl font-bold mb-10">BreizhSport</h1>
      <div class="grid grid-cols-3 gap-5 text-center">
        {sport.map((sport) => (
            <SportsCard id = {sport.id} nom = {sport.nom} image = {sport.image} />
        ))}
      </div>
    </main>
  );
}
