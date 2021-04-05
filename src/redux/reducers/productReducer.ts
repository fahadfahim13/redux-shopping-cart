import * as ProductConsts from '../actions/actiontypes/productTypes'
import { allProducts } from '../../static/products'
import { FetchProductsPayload } from '../../static/productsPayload'

const allProductsfromState = (state = allProducts, action: FetchProductsPayload) => {
    if(action.type === ProductConsts.FETCH_ALL_PRODUCTS) {
        return state
    }
    return state
}

export default allProductsfromState;