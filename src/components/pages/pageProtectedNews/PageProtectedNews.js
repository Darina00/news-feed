import React from 'react';
import Header from '../../header/Header';
import { protectedNews } from '../../static/static';
import './PageProtectedNewsStyle.css';

const PageProtectedNews = () => {
    return (
        <>
            <Header />
            <main className='main-wrapper'>
                {
                    protectedNews.map(item => (
                        <div key={item.id} className='main-wrapper__protected-news-card'>
                            <img src={item.photo} alt={item.name} />
                            <div>
                                <span>{item.name}</span>
                                <p>{item.description}</p>
                            </div>
                            <span>{item.date}</span>
                        </div>
                    ))
                }
            </main>
        </>
    )
}

export default PageProtectedNews;