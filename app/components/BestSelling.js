'use client';

import { useState } from 'react';
import './BestSelling.css';
import { FiHeart } from 'react-icons/fi';
import { GiCheckMark } from "react-icons/gi";

const TABS = [
    'Emerald (Panna)',
    'Ruby (Manik)',
    'Yellow Sapphire (Pukhraj)',
    'Blue Sapphire (Neelam)',
    'White Coral (Safed Moonga)',
];

const PRODUCTS = {
    'Emerald (Panna)': [
        { id: 1, title: 'Emerald - 6 carats', price: '₹ 21000', origin: 'Zambia', sold: true },
        { id: 2, title: 'Emerald - 6.5 carats', price: '₹ 25000', origin: 'Zambia' },
        { id: 3, title: 'Emerald - 5 carats', price: '₹ 16000', origin: 'Zambia' },
        { id: 4, title: 'Emerald - 8.5 carats', price: '₹ 75000', origin: 'Zambia' },
    ],
    'Ruby (Manik)': [
        { id: 1, title: 'Ruby - 5 carats', price: '₹ 32000', origin: 'Myanmar' },
        { id: 2, title: 'Ruby - 6 carats', price: '₹ 45000', origin: 'Myanmar' },
        { id: 3, title: 'Ruby - 7 carats', price: '₹ 58000', origin: 'Myanmar' },
        { id: 4, title: 'Ruby - 8 carats', price: '₹ 72000', origin: 'Myanmar' },
    ],
    'Yellow Sapphire (Pukhraj)': [
        { id: 1, title: 'Pukhraj - 5 carats', price: '₹ 28000', origin: 'Sri Lanka' },
        { id: 2, title: 'Pukhraj - 6 carats', price: '₹ 36000', origin: 'Sri Lanka' },
        { id: 3, title: 'Pukhraj - 7 carats', price: '₹ 48000', origin: 'Sri Lanka' },
        { id: 4, title: 'Pukhraj - 8 carats', price: '₹ 62000', origin: 'Sri Lanka' },
    ],
    'Blue Sapphire (Neelam)': [
        { id: 1, title: 'Neelam - 4 carats', price: '₹ 52000', origin: 'Sri Lanka' },
        { id: 2, title: 'Neelam - 5 carats', price: '₹ 68000', origin: 'Sri Lanka' },
        { id: 3, title: 'Neelam - 6 carats', price: '₹ 82000', origin: 'Sri Lanka' },
        { id: 4, title: 'Neelam - 7 carats', price: '₹ 98000', origin: 'Sri Lanka' },
    ],
    'White Coral (Safed Moonga)': [
        { id: 1, title: 'Moonga - 6 carats', price: '₹ 18000', origin: 'Italy' },
        { id: 2, title: 'Moonga - 7 carats', price: '₹ 24000', origin: 'Italy' },
        { id: 3, title: 'Moonga - 8 carats', price: '₹ 31000', origin: 'Italy' },
        { id: 4, title: 'Moonga - 9 carats', price: '₹ 38000', origin: 'Italy' },
    ],
};

export default function BestSelling() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <section className="trusted-section">
            {/* HEADER */}
            <div className="trusted-header">
                <p className="small-title">Our Bestselling</p>
                <h2>Gemstones Made To Support Your Growth, Balance & Success</h2>
            </div>

            {/* TABS */}
            {/* <div className="tabs">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div> */}

            {/* PRODUCTS */}
            <div className="product-grid">
                {PRODUCTS[activeTab].map((item) => (
                    <div className="product-card" key={item.id}>
                        {item.sold && <span className="badge sold">Sold Out</span>}
                        <FiHeart className="wishlist" />

                        <img
                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1766821528/Emerald-PNG-Image-File_1_rkoyhz.png"
                            alt={item.title}
                        />

                        <h4>{item.title}</h4>
                        <p>Origin: {item.origin}</p>
                        <strong>{item.price}</strong>
                    </div>
                ))}
            </div>

            {/* FOOTER */}
            <div className="trusted-footer">
                <div className="benefits">
                    <span className="benefit-item">
                        <GiCheckMark className="benefit-icon" />
                        Improves Communication
                    </span>

                    <span className="benefit-item">
                        <GiCheckMark className="benefit-icon" />
                        Personality & Charisma
                    </span>

                    <span className="benefit-item">
                        <GiCheckMark className="benefit-icon" />
                        Business Growth
                    </span>
                </div>


                <button className="view-all">View All</button>
            </div>
        </section>
    );
}
