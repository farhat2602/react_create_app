import React from 'react';


const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <a href="/#">Logo.com</a>
            </div>
            <div className='search'>
            <input className='search_input' type="text" placeholder='Search...'/>
            </div>
            <div className='login'>
                <a href="signup">Sign Up</a>
                <a href="signin">Sign in</a>
            </div>
        </div>
    )
}

export default Header;

