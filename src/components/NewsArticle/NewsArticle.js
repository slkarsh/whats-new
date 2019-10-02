import React from 'react';
import './NewsArticle.css';
 

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = ({ headline, description, imgSrc, link}) => {
    return (
        <article className='news-article'>
            <img src={imgSrc} />
            <h3>{headline}</h3>
            <p>{description}</p>
            <a href={link}>Link to article</a>
        </article>
    )
}

export default NewsArticle;