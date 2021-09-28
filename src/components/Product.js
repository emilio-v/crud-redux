import React from 'react';
import { Link } from 'react-router-dom';

//REDUX
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({ product }) => {
    const { id, name, price } = product;
    const dispatch = useDispatch();

    //Confirm if wants to delete product
    const deleteProductConfirm = id => {
        dispatch(deleteProductAction(id));
    };
    return (
        <tr>
            <td>{name}</td>
            <td>
                <span className="font-weight-bold">${price}</span>
            </td>
            <td className="acciones">
                <Link to={`/edit/product/${id}`} className="btn btn-primary mr-2">
                    Edit
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteProductConfirm(id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Product;
