import { ADD_TO_CART, CartTypes, DELETE_FROM_CART, REMOVE_FROM_CART } from "./actiontypes/cartTypes";

export const addToCart = (id: number): CartTypes => ({type: ADD_TO_CART, payload: id})
export const removeFromCart = (id: number): CartTypes => ({type: REMOVE_FROM_CART, payload: id})
export const deleteFromCart = (id: number): CartTypes => ({type: DELETE_FROM_CART, payload: id})