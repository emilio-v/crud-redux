import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

// Create new products
export const createNewProductAction = product => {
    return dispatch => {
        dispatch(addProduct());

        try {
            dispatch(addProductSuccess(product));
        } catch (error) {
            dispatch(addProductError(true));
        }
    };
};

const addProduct = () => ({
    type: ADD_PRODUCT,
});

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
});

const addProductError = value => ({
    type: ADD_PRODUCT_ERROR,
    payload: value,
});
