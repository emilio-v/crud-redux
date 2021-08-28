import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

// each reducer has its own state
const initialState = {
    productos: [],
    error: null,
    loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true,
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload],
            };
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
