import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-ZjRkODFlZTkt-w1500._CB412095875_.jpg"
                alt="amazonimage"
                 />

                 <div className="home__row">
                    <Product
                    id="1"
                    title= "The Lean Startup" 
                    price={29.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                    rating={3}
                    />
                    
                    <Product 
                    id="2"
                    title= "Samsung Smart Watch" 
                    price={269.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Ddvy2DxBL._AC_SY445_.jpg'
                    rating={5} 
                    />
                   
                </div>
                <div className="home__row">

                    <Product 
                    id="3"
                    title= "Oculus Quest 2-Virtual Reality Headset" 
                    price={397.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SX425_.jpg'
                    rating={5}
                    />

                    <Product
                    id="5"
                    title= "Yoga Mat- 1 Inch Thick" 
                    price={29.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71wIouI5G-L._AC_SX679_.jpg'
                    rating={5}
                    />

                    <Product 
                    id="4"
                    title= "ASUS VA24DQ 23.8” Monitor, 1080P Full HD" 
                    price={119.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71E1ePS8QDL._AC_SX679_.jpg'
                    rating={4}
                     />

                
                 </div>
                 <div className="home__row">
                    <Product 
                    id="6"
                    title= "Perfect Programming Desk" 
                    price={84.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71dCJDBk9eL._AC_SY450_.jpg'
                    rating={5}
                    />    


                 </div>
            </div>
        </div>
    )
}

export default Home
