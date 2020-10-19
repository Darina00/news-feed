import React from 'react';
import Header from '../../header/Header';
import './PageNotFoundStyle.css';

const PageNotFound = () => {
    return (
      <>
        <Header />
        <main className='wrapper-404'>
          <img src={require('../../../media/404.gif')} alt="Page Not Found" />  
        </main>
      </>
    )
  };

export default PageNotFound;