import './Header.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to ='/'>
           <img className ='header-logo' src ='https://pngimg.com/uploads/amazon/amazon_PNG28.png' alt =""/> 
            </Link>
            <input type='text' className='header-search' />
            <button class="header-icon" />


            <div className="header-nav">
                <Link to ='/login' className="header-link">
                    <div className="header-option">
                    <span className="header-optionFirstLine">Heloo</span>
                    <span className="header-optionSecondLine"> Sign In</span>
                    </div>
                </Link>
                <Link to ='/order' className="header-link">
                    <div className="header-option">
                    <span className="header-optionFirstLine">Order</span>
                    <span className="header-optionSecondLine">& Returns</span>
                    </div>
                </Link>
                <Link to='/prime' className="header-link">
                    <div className="header-option">
                    <span className="header-optionFirstLine">Your</span>
                    <span className="header-optionSecondLine">Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className="header-link">
                    <div className="header-basket">
                    <button className="header-optionSecondLine"/> 
                    <span className="header-basketcount">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header





/// ==== --