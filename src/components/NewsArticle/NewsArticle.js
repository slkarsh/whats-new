import React from 'react';
import './NewsArticle.css';
 

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = ({ headline, description, imgSrc, link}) => {
    return (
        <article className='news-article'>
            <img src={imgSrc} alt={`Image of ${headline}`} />
            <h3>{headline}</h3>
            <p>{description}</p>
            <a href={link}>Read more here</a>
        </article>
    )
}

export default NewsArticle;