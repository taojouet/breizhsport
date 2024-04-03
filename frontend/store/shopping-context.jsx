"use client";
import React from "react";
import { Navbar } from "@/components/Navbar";
// item élément présent dans le panier
export const ShoppingContext = React.createContext({
  items: [],
});

export const ShoppingContextProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);

  const addItem = (newItem) => {
    const existingItemIndex = items.findIndex((item) => item.id === newItem.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantite++;
      updatedItems[existingItemIndex].prixTotal += newItem.prix;
      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, { ...newItem, quantite: 1, prixTotal: newItem.prix }]);
    }
  };

  const removeItem = (id) => {
    setItems((prevItems) => 
      prevItems.map((item) => {
        if (item.id == id) {
          // Si la quantité est supérieure à 1, on décrémente
          if (item.quantite > 1) {
            return { ...item, quantite: item.quantite - 1 };
          } else {
            // Sinon, on supprime complètement l'article
            return null;
          }
        } else {
          return item;
        }
      })
    );
  };
  
  

  const clearItems = () => setItems([]);

  return (
    <ShoppingContext.Provider value={{ items, addItem, removeItem, clearItems }}>
      <Navbar />
      {children}
    </ShoppingContext.Provider>
  );
};