import {Product} from './products'

export interface FetchProductsPayload {
    type: string;
    payload: Product;
}

export interface AllProductsPayload {
    type: string;
}

export interface SelectedProductPAyload {
    type: string;
    payload: {
        id: number
    };
}