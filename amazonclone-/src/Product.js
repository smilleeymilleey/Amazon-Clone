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
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                alt="the lean startup book"
            />

            <button> Add to Basket </button>

        </div>
    )
}

export default Product
