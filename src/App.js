// src/App.js
import React from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import { NewsProvider } from './context/NewsContext';
import './styles/App.css';
import logo from './assets/live-break.png'
import Header from './components/Header';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Advertisement from './components/Advertisement';

const App = () => {
    return (
        <NewsProvider>
            <div className="App ">
                {/* <h1 className='header'>News App</h1> */}
                {/* <img src={logo}/> */}
                <Header/>
                <Trending/>
                <Advertisement/>

                <SearchBar />
                <CategoryFilter />
                <NewsList />
                <Footer/>
            </div>
        </NewsProvider>
        
    );
};

export default App;
