import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

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
    START_PRODUCT_EDITION,
    PRODUCT_EDITION_SUCCESS,
    PRODUCT_EDITION_ERROR
} from '../types';

// Add new product
const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});

export function addNewProduct(product) {
    return async (dispatch) => {
        dispatch(addProduct());

        try {

            await axiosClient.post('/products', product); // API request
            dispatch(addProductSuccess(product));  // Update state

            Swal.fire({
                icon: 'success',
                title: 'Correct!',
                text: 'Product added successfully'
            });

        } catch (error) {
            console.log(error);
            dispatch( addProductError(true) );
            
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error has occurred, try again.'
            });
        }
    }
}

// Download Products
const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
});

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});

export function getProducts() {
    return async (dispatch) => {
        dispatch( downloadProducts() );

        try {

            const response = await axiosClient.get('/products');
            dispatch( downloadProductsSuccess(response.data) )
            
        } catch (error) {
            console.log(error);
            dispatch(downloadProductsError());
        }
    }
}

// Delete product
const productToDelete = id => ({
    type: PRODUCT_DELETE,
    payload: id
});

const deleteSuccess = () => ({
    type: PRODUCT_DELETE_SUCCESS,
});

const deleteError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
});

export function deleteProduct(id) {
    return async (dispatch) => {
        dispatch(productToDelete(id) );

        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch( deleteSuccess() );

            Swal.fire({
                icon: 'success',
                title: 'Deleted',
                text: 'Product deleted successfully.'
            })

        } catch (error) {
            console.log(error);
            dispatch( deleteError() );
        }
    }
}

// Edit product
const productToEdit = id => ({
    type: PRODUCT_EDIT,
    payload: id
});

export function getProductToEdit(id) {
    return (dispatch) => {
        dispatch(productToEdit(id));
    }
}

const startEdition = () => ({
    type: START_PRODUCT_EDITION
});

const editSuccess = product => ({
    type: PRODUCT_EDITION_SUCCESS,
    payload: product
});

const editError = () => ({
    type: PRODUCT_EDITION_ERROR,
    payload: true
});

export function editProduct(product) {
    return async (dispatch) => {
        dispatch(startEdition());

        try {
            await axiosClient.put(`/products/${product.id}`, product);
            dispatch(editSuccess());

        } catch (error) {
            console.log(error);
            dispatch(editError());
        }
    }
}