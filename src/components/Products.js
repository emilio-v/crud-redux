import React, { useEffect } from 'react';

import Product from './Product';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = () => dispatch(getProductsAction());
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const products = useSelector(state => state.products.products);
    console.log(products);

    return (
        <>
            <h2 className="text-center my-5">Product List</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0
                        ? 'There are not products'
                        : products.map(product => <Product key={product.id} product={product} />)}
                </tbody>
            </table>
        </>
    );
};

export default Products;
