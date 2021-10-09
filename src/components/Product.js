import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//REDUX
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEdit } from '../actions/productActions';

const Product = ({ product }) => {
    const { id, name, price } = product;
    const dispatch = useDispatch();
    const history = useHistory();

    //Confirm if wants to delete product
    const deleteProductConfirm = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(deleteProductAction(id));
            }
        });
    };

    const redirectToEdit = product => {
        dispatch(getProductEdit(product));
        history.push(`/edit/product/${product.id}`);
    };

    return (
        <tr>
            <td>{name}</td>
            <td>
                <span className="font-weight-bold">${price}</span>
            </td>
            <td className="acciones">
                <button className="btn btn-primary mr-2" onClick={() => redirectToEdit(product)}>
                    Edit
                </button>
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
