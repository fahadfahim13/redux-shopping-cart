import * as ProductTypes from '../actions/actiontypes/productTypes'
import * as ProductActions from '../actions/productActions'

describe('Fetching and Selecting Products Actions', () => {
    it('Fetch Products', () => {
        expect(ProductActions.fetchAllProducts()).toEqual({
            type: ProductTypes.FETCH_ALL_PRODUCTS
        })
    })

    it('Select Products', () => {
        expect(ProductActions.selectProduct(0)).toEqual({
            type: ProductTypes.SELECT_PRODUCT,
            payload: {id: 0}
        })
    })
})