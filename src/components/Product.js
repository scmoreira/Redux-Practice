import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { deleteProduct, getProductToEdit } from '../actions/productActions';

const Product = ({ product }) => {
    
    const { name, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickDelete = id => {

        // Ask for confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: 'A product that is deleted cannot be recovered',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                dispatch( deleteProduct(id) );
            }
        });
    }

    const handleClickEdit = product => {
        dispatch( getProductToEdit(product) );
        history.push(`/products/edit/${product.id}`)
    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> $ {price} </span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => handleClickEdit(product) }
                    className="btn btn-primary mr-2">
                    Edit
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleClickDelete(id)}
                >Delete </button>
            </td>
        </tr>
     );
}
 
export default Product;