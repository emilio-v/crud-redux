import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';
import productApi from '../config/axios';

// Create new products
export const createNewProductAction = product => {
    return async dispatch => {
        dispatch(addProduct());

        try {
            await productApi.post('/productos', product);
            dispatch(addProductSuccess(product));
        } catch (error) {
            console.log(error);
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

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state,
});
