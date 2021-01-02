import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="header">
            <img 
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />

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

      
        </div>
    );
}

export default Header;
