import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESS,
} from '../types';

// each reducer has its own state
const initialState = {
    products: [],
    error: null,
    loading: false,
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
        default:
            return state;
    }
};
