import * as CartTypes from "./actions/actiontypes/cartTypes";
import * as ProductTypes from './actions/actiontypes/productTypes'


export const fetchProduct = {
    type:  ProductTypes.FETCH_ALL_PRODUCTS,
    payload: {
        id: 1,
        name: 'Hello', 
        price: 150
    }
}

export const cartAction = {
    type: CartTypes.ADD_TO_CART,
    payload: 1
}
export const secondCartAction = {
    type: CartTypes.ADD_TO_CART,
    payload: 2
}

export const removeFromCartAction = {
    type: CartTypes.REMOVE_FROM_CART,
    payload: 1
}

export const deleteFromCartAction = {
    type: CartTypes.DELETE_FROM_CART,
    payload: 1
}

export const cartAfterSingleAdd = [
    {
        product: {
            id: 1,
            name: 'Product 1',
            price: 100,
        },
        quantity: 1
    }
]
export const cartAfterDoubleAdd = [
    {
        product: {
            id: 1,
            name: 'Product 1',
            price: 100,
        },
        quantity: 2
    }
]

export const cartAfterNewAdd = [
    {
        product: {
            id: 1,
            name: 'Product 1',
            price: 100,
        },
        quantity: 1
    },
    {
        product: {
            id: 2,
            name: 'Product 2',
            price: 200,
        },
        quantity: 1
    },
]

export const cartAfterDeleteFirst = [
    {
        product: {
            id: 2,
            name: 'Product 2',
            price: 200,
        },
        quantity: 1
    },
]

