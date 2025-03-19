import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/AboutPage.css'; 

const AboutPage = () => {
    const location = useLocation(); 

    return (
        <div className="about-container">
            <h1 className="about-heading">Om Oss</h1>
            <p className="about-paragraph">Välkommen till vår sida!</p>

            <h2 className="about-subheading">Undersidor</h2>
            
            <nav className="">
                <ul>
                    <li>
                        <Link
                            to="/about/contact"
                            className={`navbar-link ${location.pathname === '/about/contact' ? 'active' : ''}`}
                        >
                            Kontakt
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about/faq"
                            className={`navbar-link ${location.pathname === '/about/faq' ? 'active' : ''}`}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about/history"
                            className={`navbar-link ${location.pathname === '/about/history' ? 'active' : ''}`}
                        >
                            Historik
                        </Link>
                    </li>
                </ul>
            </nav>

            <div>
                {/* Här kan du lägga till ytterligare innehåll */}
            </div>
        </div>
    );
};

export default AboutPage;
