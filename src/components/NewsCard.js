// src/components/NewsCard.js
import React from 'react';

const NewsCard = ({ news }) => {
    return (
        <div className="news-card">
            <img src={news.urlToImage} alt={news.title} />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <p><strong>Views:</strong> {news.viewCount || Math.floor(Math.random() * 1000)}</p>
        </div>
    );
};

export default NewsCard;
