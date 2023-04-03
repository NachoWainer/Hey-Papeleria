import { createContext } from "react";

export const CartContext = createContext()

const init = JSON.parse(loccalStorage.geeetItem('carrito')) || []