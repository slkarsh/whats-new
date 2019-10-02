import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = (props) => {
    return (
        props.local.map(localNews => {
            return <NewsArticle 
            key={localNews.id} 
            
        })
        <main className='NewsContainer'>
            <NewsArticle />
        </main>
    )
}

export default NewsContainer;