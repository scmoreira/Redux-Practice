import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    PRODUCT_DELETE,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_ERROR,
    PRODUCT_EDIT,
    PRODUCT_EDITION_SUCCESS,
    PRODUCT_EDITION_ERROR
} from '../types';

const initialState = {
    products: [],
    error: false,
    loading: false,
    productToDelete: null,
    productToEdit: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case START_DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case PRODUCT_DELETE_ERROR:
        case PRODUCT_EDITION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                productToDelete: action.payload
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.productToDelete ),
                productToDelete: null
            }
        case PRODUCT_EDIT:
            return {
                ...state,
                productToEdit: action.payload
            }
        case PRODUCT_EDITION_SUCCESS:
            return {
                ...state,
                productToEdit: state.products.map( product =>
                    product.id === action.payload.id ? product = action.payload : product )
            }
        default:
            return state;
    }
}