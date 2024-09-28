// src/context/NewsContext.js
import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState('general');
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <NewsContext.Provider value={{ news, setNews, category, setCategory, searchTerm, setSearchTerm }}>
            {children}
        </NewsContext.Provider>
    );
};
