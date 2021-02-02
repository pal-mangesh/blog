import React from 'react';

const Header = ()=>{
    return(
        <header className="header">
            <nav className="headerMenu  ">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </nav>
            <div>
                Social media links
            </div>
        </header>
    );
}

export default Header