import React from 'react';
import '../styles/Trending.css';
import { FaFire } from 'react-icons/fa'; // Import the trending news icon

const Trending = () => {
    return (
        <div className="App">
            {/* Other components */}
            <div className="marquee-container">
                <FaFire className="trending-icon" />
                <div className="marquee">
                    <div className="marquee-content">
                        Trending News: AI Revolution in Tech | Global Market Trends | Sports Update: Champions League Results | Upcoming Movies 2024 | Latest Political News
                    </div>
                    <div className="marquee-content">
                        Trending News: AI Revolution in Tech | Global Market Trends | Sports Update: Champions League Results | Upcoming Movies 2024 | Latest Political News
                    </div>
                </div>
            </div>
            {/* Other components */}
        </div>
    );
}

export default Trending;
