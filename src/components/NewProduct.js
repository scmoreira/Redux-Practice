import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewProduct } from '../actions/productActions';
import { showAlert, hideAlert } from '../actions/alertActions';
    
const NewProduct = ({ history }) => {
    
    // Component state
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [id, setId] = useState(0);

    const dispatch = useDispatch();

    // Store state
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const alert = useSelector(state => state.alert.alert);

    const addProduct = product => dispatch(addNewProduct(product));

    const handleSubmit = e => {
        e.preventDefault();
        
        if (name.trim() === '' || price <= 0) {
            const alert = {
                msg: 'All fields required',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlert(alert));

            return;
        }

        dispatch(hideAlert());
        addProduct({ name, price, id });
        history.push('/');
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        
                        <h2 className='text-center mb-4 font-weight-bold'>Add New Product</h2>
                        {alert && <p className={alert.classes}>{alert.msg}</p>}
                        
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>Product Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
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
                                    onChange={e => setPrice(Number(e.target.value))}
                                    className='form-control'
                                    placeholder='Price'
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >Add</button>
                        </form>
                        {loading && <p>Loading...</p>}
                        {error && <p className='alert alert-danger p2 mt-4 text-center'>An error has occurred!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
