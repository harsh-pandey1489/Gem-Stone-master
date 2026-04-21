'use client';

import './navbar.css';
import { FiPhone, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { IoCallSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchPopup from '../components/SearchPopup';
import Link from 'next/link';

export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <header className="navbar-wrapper">

            {/* ================= TOP BAR ================= */}
            <div className="top-bar">
                <a href="tel:+918595046368" className="top-left">
                    <span className="phone">
                        <IoCallSharp size={20} color="#ffff" />+91 8595046368
                    </span>
                </a>

                <div className="top-right">

                    {/* DESKTOP SEARCH (CLICK → POPUP) */}
                    <div
                        className="search-box desktop-only"
                        onClick={() => setShowPopup(true)}
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            readOnly
                        />
                        <FiSearch className="search-icon" />
                    </div>

                    <div className="top-links desktop-only">
                        <span><BiSolidUser size={20} /> Account</span>
                        <span><FaHeart size={20} /> Wishlist</span>
                        <span><HiShoppingCart size={20} /> My Bag</span>
                    </div>

                    {/* HAMBURGER */}
                    <div className="hamburger" onClick={() => setOpen(!open)}>
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAV ================= */}
            <nav className="main-nav">
                <div className="logo" onClick={() => router.push('/')}>
                    <img src="/favicon.ico" alt="Logo" />
                </div>


                {/* DESKTOP ASTRO */}
                <div className="astro-call desktop-only">

                    <div className="nav-left">


                        <ul className="menu desktop-only ">
                            <ul className="menu desktop-only">
                                <li><Link href="/vastu-consulting">Vastu Consulting</Link></li>
                                <li><Link href="/astrology-services">Astrology Services</Link></li>
                                <li><Link href="/shop">Shop</Link></li>
                                <li><Link href="/about">About us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                            </ul>
                        </ul>
                    </div>
                    <a href="tel:+918595046368" className="astro-left px-3 rounded-[7px] bg-[#FFF5E9]">

                        <div className="astro-icon">
                            {/* <FiPhone /> */}
                            <IoCallSharp size={32} color="#E57661" />
                        </div>
                        <div className="astro-text">
                            <p>Talk to our Astrologer</p>
                            <span className='text-[#E57661]'>+91 8595046368</span>
                        </div>
                        <div className="astro-image">
                            <img
                                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1766820530/compressed_52b5069c46640705212e2b570fb52627_3_zlf0wr.png"
                                alt="Astrologer"
                            />
                        </div>
                    </a>


                </div>

                {/* MOBILE SEARCH ICON → POPUP */}
                <div
                    className="mobile-search-icon"
                    onClick={() => setShowPopup(true)}
                >
                    <FiSearch size={22} />
                </div>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <div className="mobile-menu">
                    <ul>
                        <ul className="  .mobile-menu ul">
                            <li><Link href="/vastu-consulting">Vastu Consulting</Link></li>
                            <li><Link href="/astrology-services">Astrology Services</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </ul>

                    <div className="mobile-links">
                        <span><BiSolidUser /> Account</span>
                        <span><FaHeart /> Wishlist</span>
                        <span><HiShoppingCart /> My Bag</span>
                    </div>

                    <a href="tel:+918595046368" className="mobile-astro">
                        <IoCallSharp size={20} color="#E57661" />Talk to Astrologer
                    </a>
                </div>
            )}

            {/* ================= SEARCH POPUP ================= */}
            {showPopup && (
                <SearchPopup onClose={() => setShowPopup(false)} />
            )}
        </header>
    );
}
