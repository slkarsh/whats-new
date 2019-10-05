import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = ({ displayed }) => {
    const displayArticles = displayed.map(currentNews => {
        return (
            <NewsArticle
                key={currentNews.id}
                headline={currentNews.headline}
                description={currentNews.description}
                imgSrc={currentNews.img}
                link={currentNews.url}
             />
        )
    })
    return (
        <main className='NewsContainer'>
            {displayArticles}
        </main>
    )
}

export default NewsContainer;