import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';








function Checkout() {

  const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/January_NewYearOffer_ILM_1300x90_V02_B._CB413723057_.jpg" 
                alt="advertisment" 
                />

                <div>
                  <h2 className="checkout__title">
                    Your Shopping Basket
                  </h2>

                  {basket.map(item => (
                    <CheckoutProduct 
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    
                    />



                  ))}

             
                </div>

            </div>

            <div className="checkout__right">
              <Subtotal />
             
            </div>
        </div>
    )
};

export default Checkout;
