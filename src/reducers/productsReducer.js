import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESS,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_ERROR,
    PRODUCT_DELETED_SUCCESS,
} from '../types';

// each reducer has its own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    deletedProduct: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
        case START_DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: action.payload,
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productos: [...state.products, action.payload],
            };
        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case PRODUCT_DELETED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload,
            };
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                deletedProduct: action.payload,
            };
        case PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.deletedProduct),
                deletedProduct: null,
            };
        default:
            return state;
    }
};
