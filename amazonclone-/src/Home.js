import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-ZjRkODFlZTkt-w1500._CB412095875_.jpg" alt="amazonimage"
                 />

                 <div className="home__row">
                    <Product />
                    
                </div>
                <div className="home_row">
                    {/* Product*/}
                    {/* Product*/}
                    {/* Product*/}
                 </div>
                 <div className="home__row">
                    {/* Product*/}
                    {/* Product*/}


                 </div>
            </div>
        </div>
    )
}

export default Home
