"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/form";
import { ShoppingBasket } from "lucide-react";
import { ShoppingContent } from "./shoppingContent";
export function ShoppingBtn(props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ShoppingBasket />
          <span className="ml-2"> ({props.items.reduce((total, item) => total + item.quantite, 0)}) </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`h-96 w-80 ${
          props.items.length > 4 ? "overflow-y-auto" : ""
        }`}
      >
        {props.items.map((item) => (
          <ShoppingContent key={item.id} {...item} />
        ))}
        <hr></hr>
        <div className="flex justify-center mt-4">
          <p className="text-muted-foreground bg-yellow-300 font-bold mr-3">
            Prix total : {props.items.map(item => item.prix * item.quantite).reduce((a, b) => a + b, 0)}
            €
          </p>
          <Button>Valider</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
