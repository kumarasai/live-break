// src/components/CategoryFilter.js
import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import '../styles/CategoryFilter.css';

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const CategoryFilter = () => {
    const { setCategory } = useContext(NewsContext);

    return (
        <div className="category-filter">
            {categories.map((cat) => (
                <button key={cat} onClick={() => setCategory(cat)}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
