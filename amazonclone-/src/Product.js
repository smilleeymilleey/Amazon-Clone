import React from 'react';
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array (rating).fill().map((_, i) => (

                    <StarRateIcon />
                    ))}

                   
                   
                </div>
            </div>

            <img
                src={image}
                alt="amazon product picture"
            />

            <button> Add to Basket </button>

        </div>
    )
}

export default Product
