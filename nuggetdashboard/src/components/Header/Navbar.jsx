import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'; 
import { useSelector } from 'react-redux';
import '../../styles/Navbar.css';

const Navbar = ({ isLoggedIn }) => {
    const bitcoinSavings = useSelector((state) => state.bitcoinSavings.savings); 
    const dataCount = bitcoinSavings.length; 
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Förhindra scrollning när mellanslag trycks ned
            toggleMenu();
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">
                    BB <FontAwesomeIcon icon={faBitcoin} /> 
                </h1>
                <div 
                    className="menu-icon" 
                    onClick={toggleMenu} 
                    onKeyDown={handleKeyDown} 
                    tabIndex={0} 
                    role="button"
                    aria-label="Öppna/ Stäng meny" 
                >
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className="nav-links-container">
                    <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={toggleMenu}>
                                <i className="fas fa-home"></i> Hem
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={toggleMenu}>
                                <i className="fas fa-info-circle"></i> Support
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={toggleMenu}>
                                <i className="fas fa-box"></i> Sparkalkylator
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link to="/profile" className="nav-links" onClick={toggleMenu}>
                                    <i className="fas fa-user-circle"></i> Profil
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="nav-login" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/dashboard" style={{ marginRight: '0.2rem', display: 'flex', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <FontAwesomeIcon 
                                icon={faDatabase} 
                                style={{ color: dataCount > 0 ? 'green' : 'white' }}
                            />
                            {dataCount > 0 && (
                                <div 
                                    style={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '20px',
                                        width: '0',
                                        height: '0',
                                        borderTop: '5px solid transparent',
                                        borderBottom: '5px solid transparent',
                                        borderLeft: '5px solid green', 
                                    }}
                                />
                            )}
                        </div>
                    </Link>
                    {!isLoggedIn ? (
                        <Link to="/login" className="nav-links" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    ) : (
                    <span className="nav-links">
                        <FontAwesomeIcon icon={faUserCheck} style={{ color: 'green' }} />
                    </span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;