import React from 'react';
import { Link, Route } from 'react-router-dom';
import auth from './Auth';
import Header from '../header/Header';
import './RouterStyle.css';

export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route 
        {...rest}
        render={props => {
            if (auth.isAuthenticated()) {
                return <Component {...props} />;
            }
            else {
                return (
                    <>
                        <Header />
                        <div className='sorry-content'>
                            <img src={require('../../media/sorry.gif')} alt='Sorry' />
                            <span>Sorry, but you must be <Link to='/login'>logged in</Link></span>
                        </div>
                    </>
                )
            }
        }}
        />
    )
}