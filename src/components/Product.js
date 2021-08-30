import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, price } = product;
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
                <button type="button" className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Product;
