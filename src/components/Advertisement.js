import React, { useState } from 'react';
import '../styles/Advertisement.css';
import banner from '../assets/banner.jpg'

const Advertisement = () => {
    const [isVisible, setIsVisible] = useState(true); // State to control ad visibility

    // Function to close the advertisement
    const closeAd = () => {
        setIsVisible(false);
    };

    // If the ad is closed, don't render the component
    if (!isVisible) return null;

    return (
        <div className="advertisement-container">
            <div className="advertisement-header">
                <h3>Advertisement</h3>
                <button className="close-btn" onClick={closeAd}>
                    &times; {/* Close icon (X) */}
                </button>
            </div>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img
                    src={banner}
                    alt="Advertisement"
                    className="advertisement-image"
                />
            </a>
        </div>
    );
};

export default Advertisement;
