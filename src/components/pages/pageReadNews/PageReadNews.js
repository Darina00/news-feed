import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link key={item.id} to={`/news/${item.id}`}>
                            <div className='main-wrapper__news-card'>
                                <img src={item.photo} alt={item.name} />
                                <div>
                                    <span>{item.name}</span>
                                    <p>{item.shortDescription}</p>
                                </div>
                                <span>{item.date}</span>
                            </div>
                        </Link> 
                    ))
                }
            </main>
        </>
    )
}

export default PageReadNews;