import * as ProductTypes from '../actions/actiontypes/productTypes'
import { allProducts } from '../../static/products'
import allProductsfromState from '../reducers/productReducer'
import { cart, CartItem } from "../../static/cart";
import * as CartTypes from "../actions/actiontypes/cartTypes";
import cartReducer from '../reducers/cartReducer'

import * as CartConstants from '../constants'

describe('Cart And Product Reducers', () => {

    /// Fetch Products
    it('Fetch Products', () => {
        expect(allProductsfromState(allProducts, CartConstants.fetchProduct)).toEqual(allProducts)
    })

    ////Add To Cart

    it('Add To Cart: New Element ', () => {
        expect(cartReducer([],CartConstants.cartAction)).toEqual(CartConstants.cartAfterSingleAdd)
    })

    it('Add To Cart: New Second Element ', () => {
        expect(cartReducer(CartConstants.cartAfterSingleAdd,CartConstants.secondCartAction)).toEqual(CartConstants.cartAfterNewAdd)
    })

    it('Add To Cart: Previous Element add', () => {
        expect(cartReducer(CartConstants.cartAfterSingleAdd,CartConstants.cartAction)).toEqual(CartConstants.cartAfterDoubleAdd)
    })

    /// Remove From Cart

    it('Remove From Cart single element', () => {
        expect(cartReducer(CartConstants.cartAfterSingleAdd,CartConstants.removeFromCartAction)).toEqual([])
    })

    it('Remove From Cart single element (twice)', () => {
        expect(cartReducer(CartConstants.cartAfterDoubleAdd,CartConstants.removeFromCartAction)).toEqual(CartConstants.cartAfterSingleAdd)
    })

    it('Remove From Cart double element', () => {
        expect(cartReducer(CartConstants.cartAfterNewAdd,CartConstants.removeFromCartAction)).toEqual(CartConstants.cartAfterDeleteFirst)
    })

    it('Remove From Cart no element', () => {
        expect(cartReducer([],CartConstants.removeFromCartAction)).toEqual([])
    })

    /// Delete From Cart 

    it('Delete From Cart no element', () => {
        expect(cartReducer([],CartConstants.deleteFromCartAction)).toEqual([])
    })

    it('Delete From Cart single element', () => {
        expect(cartReducer(CartConstants.cartAfterSingleAdd,CartConstants.deleteFromCartAction)).toEqual([])
    })

    it('Delete From Cart single element (previous) ', () => {
        expect(cartReducer(CartConstants.cartAfterDoubleAdd,CartConstants.deleteFromCartAction)).toEqual([])
    })

    it('Delete From Cart single element (new) ', () => {
        expect(cartReducer(CartConstants.cartAfterNewAdd,CartConstants.deleteFromCartAction)).toEqual(CartConstants.cartAfterDeleteFirst)
    })

})


