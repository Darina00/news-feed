import React from 'react';
import './HeaderStyle.css';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <strong className='header-wrapper__logo'>
                <a href='/'>NEWShome</a>
            </strong>
            <div>
                <nav className='header-wrapper__navigation'>
                    <ul>
                        <hr/>
                        <li onClick={() => window.location.href='/protected-news'}>Protected News</li>
                    </ul>    
                </nav>
                {
                    localStorage.getItem('idUser') ? 
                    <FiLogOut className='header-wrapper__log' onClick={() => {localStorage.clear(); document.location.reload()}} />
                    :
                    <FiLogIn className='header-wrapper__log' onClick={() => window.location.href = '/login'} />
                }
            </div>
        </header>
    )
}
 
export default Header;