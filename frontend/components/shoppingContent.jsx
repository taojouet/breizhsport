import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ShoppingContext } from "@/store/shopping-context";
export function ShoppingContent(props) {
  const { items, addItem, removeItem } = useContext(ShoppingContext);

  const handleIncreaseQuantity = () => {
    const itemToIncrement = items.find((item) => item.id === props.id);
  
    if (itemToIncrement) {
      const updatedItem = { ...itemToIncrement, quantite: itemToIncrement.quantite + 1 };
  
      addItem(updatedItem);
    }
  };

  const handleDecreaseQuantity = () => {
    if(props.quantite === 1) {
      return
    }
    removeItem(props.id);
  };

  const handleRemoveItem = () => {
    removeItem(props.id);
  };

  return (
    <div className="flex items-center space-x-4 rounded-md border p-4">
      <img height="64" width="64" src={props.image} alt={props.nom} />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{props.nom}</p>
        <p className="text-sm text-muted-foreground bg-yellow-300 font-bold mr-3">
          {props.prix} €
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="primary" onClick={handleDecreaseQuantity}>-</Button>
          <p className="text-sm text-muted-foreground">{props.quantite}</p>
          <Button variant="primary" onClick={handleIncreaseQuantity}>+</Button>
        </div>
      </div>
      <Button variant="destructive" onClick={handleRemoveItem}>X</Button>
    </div>
  );
}