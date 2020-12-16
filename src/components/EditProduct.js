import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { editProduct } from '../actions/productActions';

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // New product state
    const [product, setProduct] = useState({
        name: '',
        price: 0
    });

    const { name, price } = product;

    // Product to edit
    const productToEdit = useSelector(state => state.products.productToEdit);

    useEffect(() => {
        setProduct(productToEdit);
    }, [productToEdit]);

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(editProduct(product));

        history.push('/');
    }

    return (
        <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>Edit Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Product Name</label>
                            <input
                                type='text'
                                name='name'
                                value={name}
                                onChange={handleChange}
                                className='form-control'
                                placeholder='Product name'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Price</label>
                            <input
                                type='number'
                                name='price'
                                value={price}
                                onChange={handleChange}
                                className='form-control'
                                placeholder='Price'
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                        >Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditProduct;
