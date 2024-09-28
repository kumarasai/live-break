// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // React Icons for social media
import Logo from '../assets/live-break-white.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo">
                    
                    <img src={Logo} alt="News App Logo" className="footer-logo-img" />
                </div>

                {/* Basic Links Section */}
                <div className="footer-links">
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-social">
                    <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                    <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                    <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </div>

            {/* Rights Reserved Section */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Live Break . All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
