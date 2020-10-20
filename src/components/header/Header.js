import React from 'react';
import './HeaderStyle.css';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <strong className='header-wrapper__logo'>
                <Link to='/'>NEWShome</Link>
            </strong>
            <div>
                <nav className='header-wrapper__navigation'>
                    <ul>
                        <hr/>
                        <Link to="/protected-news"><li>Protected News</li></Link>
                    </ul>    
                </nav>
                {
                    localStorage.getItem('idUser') ? 
                    <FiLogOut className='header-wrapper__log' onClick={() => {localStorage.clear(); document.location.reload()}} />
                    :
                    <Link to="/login"><FiLogIn className='header-wrapper__log' /></Link>
                }
            </div>
        </header>
    )
}
 
export default Header;