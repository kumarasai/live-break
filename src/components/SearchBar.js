// src/components/SearchBar.js
import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import useDebounce from '../hooks/useDebounce';
import '../styles/SearchBar.css';

const SearchBar = () => {
    const { setSearchTerm } = useContext(NewsContext);
    const [inputValue, setInputValue] = React.useState('');

    const debouncedSearchTerm = useDebounce(inputValue, 300);

    const handleSearch = (event) => {
        setInputValue(event.target.value);
    };

    React.useEffect(() => {
        // Set the search term in context
        setSearchTerm(debouncedSearchTerm);

        // If the search term is empty, reset news
        if (debouncedSearchTerm === '') {
            setSearchTerm('');
        }
    }, [debouncedSearchTerm, setSearchTerm]);

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search news..."
                value={inputValue}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;