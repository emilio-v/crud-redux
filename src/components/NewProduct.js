import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductAction } from '../actions/productActions';
import { showAlert } from '../actions/alertActions';

const NewProduct = ({ history }) => {
    const [valuesForm, setValuesForm] = useState({ name: '', price: 0 });

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.products.loading);

    const addProduct = product => dispatch(createNewProductAction(product));

    const onSubmit = e => {
        e.preventDefault();
        const { name, price } = valuesForm;

        if (name.trim() === '' || price <= 0) {
            const alert = {
                msg: 'Both fields are required',
                classes: 'alert alert-danger text-center text-uppercase p3',
            };
            dispatch(showAlert(alert));
            return;
        }

        addProduct({ name, price });

        history.push('/');
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    value={valuesForm.name}
                                    onChange={e =>
                                        setValuesForm({ ...valuesForm, name: e.target.value })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                    value={valuesForm.price}
                                    onChange={e =>
                                        setValuesForm({
                                            ...valuesForm,
                                            price: parseInt(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Add
                            </button>
                        </form>
                        {isLoading && <p className="alert alert-info p2 mt-3 mb-0">Loading...</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
