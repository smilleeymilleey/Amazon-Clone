import React from 'react';
import './Checkout.css';

function Checkout() {
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

                  {/*BasketItem*/}
                  {/*BasketItem*/}
                  {/*BasketItem*/}
                  {/*BasketItem*/}
                  {/*BasketItem*/}
                  
                </div>

            </div>

            <div className="checkout__right">
              <h2>The subtotal will go here</h2>
                
            </div>
        </div>
    )
}

export default Checkout
