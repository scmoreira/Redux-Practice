import React from 'react';

const EditProduct = () => {
    return (
        <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>Edit Product</h2>
                    <form>
                        <div className='form-group'>
                            <label>Product Name</label>
                            <input
                                type='text'
                                name='name'
                                //value={name}
                                className='form-control'
                                placeholder='Product name'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Price</label>
                            <input
                                type='number'
                                name='price'
                                //value={price}
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
