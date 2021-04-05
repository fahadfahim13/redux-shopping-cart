export const ADD_TO_CART: string = 'ADD_TO_CART'
export const REMOVE_FROM_CART: string = 'REMOVE_FROM_CART'
export const DELETE_FROM_CART: string = 'DELETE_FROM_CART'
export const GET_CART: string = 'GET_CART'

export type CartTypes = 
| { type: typeof ADD_TO_CART, payload: number }
| { type: typeof REMOVE_FROM_CART, payload: number }
| { type: typeof DELETE_FROM_CART, payload: number } 
| { type: typeof GET_CART, payload: any } 
