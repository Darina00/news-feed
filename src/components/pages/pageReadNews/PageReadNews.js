import React from 'react';
import Header from '../../header/Header';
import { news } from '../../static/static';
import './PageReadNewsStyle.css';

const PageReadNews = () => {
    return (
        <>
            <Header />
            <main className='main-wrapper'>
                {
                    news.map(item => (
                        <div key={item.id} className='main-wrapper__news-card' onClick={() => window.location.href=`/news/${item.id}`}>
                            <img src={item.photo} alt={item.name} />
                            <div>
                                <span>{item.name}</span>
                                <p>{item.shortDescription}</p>
                            </div>
                            <span>{item.date}</span>
                        </div>
                    ))
                }
            </main>
        </>
    )
}

export default PageReadNews;