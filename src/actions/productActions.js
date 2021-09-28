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
import productApi from '../config/axios';
import Swal from 'sweetalert2';

// Create new products
export const createNewProductAction = product => {
    return async dispatch => {
        dispatch(addProduct());

        try {
            await productApi.post('/productos', product);
            dispatch(addProductSuccess(product));
            Swal.fire('Success', 'The product has been added successfully', 'success');
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));
            Swal.fire('Error', 'Something went wrong. Please try again', 'error');
        }
    };
};

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true,
});

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
});

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state,
});

export const getProductsAction = () => {
    return async dispatch => {
        dispatch(downloadProducts());

        try {
            const request = await productApi.get('/productos');
            const { data } = request;
            dispatch(successfulProductsDownload(data));
        } catch (error) {
            dispatch(downloadProductsError());
        }
    };
};

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true,
});

const successfulProductsDownload = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products,
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true,
});

// SELECT AND DELETE PRODUCT
export const deleteProductAction = id => {
    return async dispatch => {
        dispatch(getProductDelete(id));

        try {
            await productApi.delete(`/productos/${id}`);
            dispatch(deleteProductSuccess());
        } catch (error) {}
    };
};

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id,
});

const deleteProductSuccess = () => ({
    type: PRODUCT_DELETED_SUCCESS,
});

const deleteProductError = () => ({
    type: PRODUCT_DELETED_ERROR,
    payload: true,
});
