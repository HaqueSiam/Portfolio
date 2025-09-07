import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/siam_logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const openMenu = () => {
        setIsMenuOpen(true);
        if (menuRef.current) {
            menuRef.current.style.right = '0';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        if (menuRef.current) {
            menuRef.current.style.right = '-350px';
        }
    };

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    };

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const navItems = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'about', label: 'About Me', href: '#about' },
        { id: 'services', label: 'Services', href: '#services' },
        { id: 'work', label: 'Projects', href: '#work' },
        { id: 'contact', label: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            {/* Logo/Brand */}
            <div className="name-logo">
                <span>Haque Siam</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="nav-mob-toggle" 
                onClick={openMenu}
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen}
            >
                <img src={menu_open} alt="" />
            </button>

            {/* Navigation Menu */}
            <ul ref={menuRef} className="nav-menu" role="menubar">
                <li className="nav-mob-close-container">
                    <button 
                        className="nav-mob-close" 
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >
                        <img src={menu_close} alt="" />
                    </button>
                </li>
                
                {navItems.map((item) => (
                    <li key={item.id} role="none">
                        <AnchorLink 
                            className="anchor-link" 
                            offset={50} 
                            href={item.href}
                            role="menuitem"
                            aria-current={menu === item.id ? 'page' : undefined}
                        >
                            <span onClick={() => handleMenuClick(item.id)}>
                                {item.label}
                            </span>
                        </AnchorLink>
                        {menu === item.id && (
                            <img 
                                src={underline} 
                                alt="" 
                                className="nav-underline"
                                aria-hidden="true"
                            />
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;