import { CartItem } from "./cart";
import { Product } from "./products";

export interface Store{
    allProductsfromState: Product[]|[]|undefined,
    cartReducer: CartItem[]|[],
}