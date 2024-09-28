// src/components/Header.js
import React,{useState} from 'react';
import '../styles/Header.css'; // Create this CSS file for styling
import Logo from '../assets/live-break.png'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={Logo} alt="News App Logo" className="logo" />
            </div>
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul className="sidebar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
            <button className="menu-toggle" onClick={toggleSidebar}>
                <span className="menu-icon">&#9776;</span>
            </button>
        </header>
    );
};

export default Header;
