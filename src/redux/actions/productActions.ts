import * as ProductConsts from './actiontypes/productTypes'
import { AllProductsPayload, SelectedProductPAyload } from '../../static/productsPayload'

export const fetchAllProducts = (): AllProductsPayload => {
    return {
        type: ProductConsts.FETCH_ALL_PRODUCTS,
    }
}

export const selectProduct = (id: number): SelectedProductPAyload => {
    console.log("Found id: ", id)
    return {
        type: ProductConsts.SELECT_PRODUCT,
        payload: {id}
    }
}