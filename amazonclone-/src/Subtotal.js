import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"; 
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                 <p>
                    {/*pass in the value prop*/}
                  Subtotal (0 items): 
                   <strong>0</strong>
                 </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> 
                        This Order Contains A Gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0} //* part of the homework*
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}


            />

         <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
