import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProductAction } from '../actions/productActions';

const EditProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => state.products.editProduct);
    const [newProduct, setNewProduct] = useState({ name: '', price: 0 });
    const { name, price } = newProduct;

    useEffect(() => {
        setNewProduct(product);
    }, [product]);

    const onChangeForm = e => {
        setNewProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const submit = e => {
        e.preventDefault();
        dispatch(editProductAction(newProduct));
        history.push('/');
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
                        <form onSubmit={submit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={name}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                    value={price}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
