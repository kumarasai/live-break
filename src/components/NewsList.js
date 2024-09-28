// src/components/NewsList.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { NewsContext } from '../context/NewsContext';
import '../styles/NewsList.css';

// const api="22f764af141f47cfbc62f16b841a59c7";

const NewsList = () => {
    const { news, setNews, category, searchTerm } = useContext(NewsContext);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const fetchNews = async () => {
        if (!hasMore) return;
        setLoading(true);
        try {
            // Fetch based on category and search term
            const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
                params: {
                    country: 'us',
                    category: category,
                    q: searchTerm, // Include search term in the request
                    page: page,
                    pageSize: 10,
                    apiKey: '22f764af141f47cfbc62f16b841a59c7'
                }
            });

            setNews((prevNews) => [...prevNews, ...response.data.articles]);
            setHasMore(response.data.articles.length > 0);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(1);
        setNews([]); // Clear previous news on category or search change
        fetchNews();
    }, [category, searchTerm]); // Refetch when category or search term changes

    useEffect(() => {
        fetchNews();
    }, [page]);

    useInfiniteScroll(() => {
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    }, loading);

    return (
        <div className="news-list">
            {news.map((article, index) => (
                <NewsCard key={index} news={article} />
            ))}
            {loading && <p>Loading more news...</p>}
            {!hasMore && <p>No more news available.</p>}
        </div>
    );
};

export default NewsList;