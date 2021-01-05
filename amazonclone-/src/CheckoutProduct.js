import React from 'react';
import './CheckoutProduct.css';
import StarRateIcon from '@material-ui/icons/StarRate';

function CheckoutProduct({ id, image, title, price, rating }) {
    return (
        <div className="checkoutProduct"> 
            <img className="checkoutProduct_image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                
                <p className="checkoutProduct__price"> 
                    <small>$</small>
                    <strong>{price}</strong>
                
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>
                            <StarRateIcon /> 
                        </p>
                     ))}
                </div>
                <button>Remove From Basket</button>
            </div>





        </div>

    )
}

export default CheckoutProduct
