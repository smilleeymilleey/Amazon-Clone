import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img 
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />
            
            </Link>
            

            <div className="header_search">
                <input
                className="header_searchInput" 
                type="text"/>
                <SearchIcon
                className="header_searchIcon" />
                
            </div>
            
            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineOne">Hello Guest</span>
                <span className="header__optionLineTwo">Sign In</span>
                </div>

            </div>

            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
                </div>

            </div>
            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
                </div>

            </div>

            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
        </div>
    );
}

export default Header;
