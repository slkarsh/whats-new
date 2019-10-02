import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = props => {
    const localNews = props.local.map(localNews => {
        return (
            <NewsArticle
                key={localNews.id}
                headline={localNews.headline}
                description={localNews.description}
                imgSrc={localNews.img}
                link={localNews.url}
             />
        )
    })
    return (
        <main className='NewsContainer'>
            {localNews}
        </main>
    )
}

export default NewsContainer;