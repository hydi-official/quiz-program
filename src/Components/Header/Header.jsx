import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../../assets/images/logo.jpg';
import userImg from '../../assets/images/avatar-icon.png';

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/products',
        display: 'Products'
    },
    {
        path: '/cart',
        display: 'Cart'
    },
    {
        path: '/contact',
        display: 'Contact Us'
    },
    {
        path: '/about',
        display: 'About Us'
    }
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <img src={logo} alt="Company Logo" className='w-12 h-12 mt-2' />
                    </div>

                    {/* Menu */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        activeClassName="text-violet-400 font-bold text-[16px] leading-7 font-[600]  hover:text-violet-400 "
                                        className="text-primaryColor font-extrabold text-[16px] leading-7  hover:text-violet-400 " 
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Nav right */}
                    <div className="flex items-center gap-4">
                        <div>
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                    <img src={userImg} className="w-full rounded-full" alt="Profile Picture" />
                                </figure>
                            </Link>
                        </div>
                        <Link to='/login'>
                            <button className="bg-[#4D06A7] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                                Login
                            </button>
                        </Link>
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
