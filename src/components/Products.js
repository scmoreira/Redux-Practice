import React, { Fragment } from 'react';

const Products = () => {
    return (
        <Fragment>
            
            <h2 className='text-center my-5'>List of Products</h2>

            <table className="table table-striped">
               <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
               </thead>
               <tbody>
                   {/* { productos.length === 0 ? 'No hay productos' : (
                       productos.map(producto => (
                           <Producto
                                key={producto.id}
                                producto={producto}
                           />
                       ))
                   ) } */}
               </tbody>
           </table>
        </Fragment>
    );
}

export default Products;
