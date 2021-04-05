import { cart, CartItem } from "../../static/cart";
import { allProducts } from "../../static/products";
import * as CartTypes from "../actions/actiontypes/cartTypes";

const cartReducer = (state = cart, action: CartTypes.CartTypes) => {
     switch (action.type) {
         case CartTypes.ADD_TO_CART:
            let flag = true
            const newCart = state.map((item: CartItem) =>{
                if(item.product.id === action.payload){
                    flag = false;
                    return {...item, quantity: item.quantity + 1 }
                }
                else{
                    return item
                }
            })

            let foundProduct = allProducts.find((product) => product.id === action.payload)
            if(flag && foundProduct) newCart.push({
                product: foundProduct,
                quantity: 1
            })
            return newCart;
        case CartTypes.REMOVE_FROM_CART:
            const updatedCart = state.map((item: CartItem) => {
                if(item.product.id===action.payload){
                    return  {...item, quantity: item.quantity - 1}
                }
                return item
            })
            return updatedCart.filter((item) => item?.quantity > 0);

        case CartTypes.DELETE_FROM_CART:
            return state.filter((item) => item.product.id!==action.payload);

        case CartTypes.GET_CART:
            return state;
     
         default:
            return state;
     }
}

export default cartReducer;