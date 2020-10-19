import React from 'react';
import './PageOneNewsStyle.css';
import { news } from '../../static/static';
import Header from '../../header/Header';
import { IoIosArrowBack } from 'react-icons/io';

const PageOneNews = props => {
    const oneNews = news.find(el => el.id === props.match.params.idNews);
    
    return (
        <>
            <Header />
            <div className='one-news-wrapper'>
                <div className='one-news-wrapper__info-block'>
                    <span className='one-news-wrapper__back' onClick={() => window.history.back()}>
                        <IoIosArrowBack />
                        Back
                    </span>
                    <span className='one-news-wrapper__title'>{oneNews.name}</span>
                    <span className='one-news-wrapper__date'>{oneNews.date}</span>
                </div>
                <img src={oneNews.photo} alt={oneNews.name} />
                <p className='one-news-wrapper__description'>{oneNews.fullDescription}</p>
            </div>
        </>
    )
}

export default PageOneNews;