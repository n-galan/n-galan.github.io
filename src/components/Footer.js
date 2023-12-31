import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Footer.css';
import ig from '../assets/img/instagram.png'

const Footer = () => {
    const location = useLocation();

    // Determines the appropriate CSS class based on the current path
    const footerClass = () => {
        if (location.pathname === '/sports') {
            return 'footer-sports';
        } else if (location.pathname === '/tech') {
            return 'footer-tech';
        } else if (location.pathname === '/music') {
            return 'footer-music';
        } else if (location.pathname === '/boxing') {
            return 'footer-boxing'
        } else if (location.pathname === '/Soccer') {
            return 'footer-soccer'
        }
        else if (location.pathname === '/Basketball') {
            return 'footer-basketball'
        }
        else if (location.pathname === '/Chess') {
            return 'footer-chess'
        }
        else if (location.pathname === '/coding-68') {
            return 'footer-coding68'
        }
        else if (location.pathname === '/engineering') {
            return 'footer-engineering'
        }
        else {
            return 'footer-default';
        }
    }

    return (
        <div className={`footer-container ${footerClass()}`}>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>At Project Unbound, we aim to revolutionize education and empower the youth of New York City.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><i className="fas fa-envelope"></i> info@projectunbound.org</li>
                        {/* <li><i className="fas fa-phone"></i> +1 (123) 456-7890</li>
                        <li><i className="fas fa-map-marker-alt"></i> 123 Main St, New York, NY</li> */}
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-list">
                    <a href="https://www.instagram.com/Project_Unbound" target="_blank" rel="noopener noreferrer">
                                <img src={ig} alt="Instagram" className="instagram-icon" />
                                <span className="instagram-name">Project_unbound</span>
                            </a>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Project Unbound. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
