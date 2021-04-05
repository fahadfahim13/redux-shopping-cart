import { Product } from './products'

export type CartItem = {
    product: Product
    quantity: number
}

export const cart: CartItem[] | [] = []
