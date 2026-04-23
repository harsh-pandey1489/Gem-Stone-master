'use client';
import React, { useState } from 'react';
import {
    FaFacebookF,
    FaXTwitter,
    FaThreads
} from 'react-icons/fa6';
import { FiArrowRight, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { FaInstagramSquare } from 'react-icons/fa';
import './ProductDetail.css';
import { FaLinkedin } from 'react-icons/fa';

const ProductDetailSection = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    if (!product) return null;

    const handleQuantityChange = (value) => {
        if (value > 0) {
            setQuantity(value);
        }
    };

    const fontStyle = { fontFamily: "'GT Walsheim Trial', sans-serif" };

    return (
        <div className="bg-white min-h-screen" style={fontStyle}>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-5 min-[500px]:px-20 pb-3 pt-8 text-[22px] text-[#303030]">
                <span className="font-[300] text-[#303030]">Home</span> /{" "}
                <span className="font-[500] text-[#303030]">{product.name}</span>
            </div>

            {/* Product Top Section */}
            <div className="max-w-7xl mx-auto px-5 min-[500px]:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Left Column */}
                <div className="flex flex-col gap-5">

                    <div className={`${product.imageBg || 'bg-[#F6F1EA]'} rounded-[16px] overflow-hidden h-[360px] flex items-center justify-center`}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Thumbnail Slider */}
                    <div className="flex gap-3 min-[500px]:gap-6 overflow-x-auto">

                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className={`${product.imageBg || 'bg-[#F6F1EA]'} rounded-[20px] min-w-[90px] w-24 h-24 min-[500px]:w-30 min-[500px]:h-30 cursor-pointer hover:border-2 border-[#E57661] transition-all`}
                            >
                                <img
                                    src={product.image}
                                    alt={`Thumbnail ${i}`}
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                        ))}

                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-4 min-[500px]:gap-6 mt-4">

                        <div className="border border-[#E57661] rounded-[10px] py-4 flex flex-col items-center justify-center bg-white">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776790906/Confidence_rkgsu3.png"
                                className="w-6 h-6 mb-1 object-contain"
                                alt="Confidence"
                            />
                            <span className="text-[#303030] text-[18px] font-[500]">
                                Confidence
                            </span>
                        </div>

                        <div className="border border-[#E57661] rounded-[10px] py-4 flex flex-col items-center justify-center bg-white">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776791173/Icon_13_iw6k6e.png"
                                className="w-6 h-6 mb-1 object-contain"
                                alt="Success"
                            />
                            <span className="text-[#303030] text-[18px] font-[500]">
                                Success
                            </span>
                        </div>

                        <div className="border border-[#E57661] rounded-[10px] py-4 flex flex-col items-center justify-center bg-white">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776790906/Leadership_kiqnzg.png"
                                className="w-6 h-6 mb-1 object-contain"
                                alt="Leadership"
                            />
                            <span className="text-[#303030] text-[18px] font-[500]">
                                Leadership
                            </span>
                        </div>

                    </div>

                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">

                    {/* Tag */}
                    <div className="inline-block">
                        <span className="bg-[#EF7E6A] text-white text-[13px] font-[400] px-3 py-3 rounded-full uppercase tracking-wide">
                            {product.tag || "FOR WEALTH & LEADERSHIP"}
                        </span>
                    </div>

                    {/* Title */}
                    <div className="flex flex-row justify-between gap-4 flex-wrap">

                        <div className="flex flex-col gap-1">
                            <h1 className="text-[28px] md:text-[35px] font-[500] text-[#303030] leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-[18px] md:text-[23px] text-[#303030] opacity-80">
                                {product.subtitle}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex text-[#EF7E6A] text-xl">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            <span className="text-sm text-[#303030]">
                                4.8{" "}
                                <span className="text-gray-400">
                                    ({product.reviews || "73"})
                                </span>
                            </span>
                        </div>

                    </div>

                    {/* Price */}
                    <div className="text-[26px] md:text-[30px] font-[600] text-[#EF7E6A]">
                        ${product.price?.toFixed(2)}
                    </div>

                    {/* Quantity + Actions */}
                    <div className="flex flex-col gap-4 mt-4">

                        <p className="text-[#303030] text-[18px] font-medium">
                            Quantity:
                        </p>

                        <div className="flex flex-col min-[500px]:flex-row items-stretch min-[500px]:items-center gap-4">

                            {/* Quantity Box */}
                            <div className="flex items-center border border-gray-200 h-[54px] rounded-md overflow-hidden">

                                <button
                                    onClick={() => handleQuantityChange(quantity - 1)}
                                    className="w-12 h-full flex items-center justify-center text-xl text-[#303030] hover:bg-gray-50"
                                >
                                    −
                                </button>

                                <input
                                    type="number"
                                    value={quantity}
                                    readOnly
                                    className="w-12 h-full text-center font-bold text-[#303030] outline-none"
                                />

                                <button
                                    onClick={() => handleQuantityChange(quantity + 1)}
                                    className="w-12 h-full flex items-center justify-center text-xl text-[#303030] hover:bg-gray-50"
                                >
                                    +
                                </button>

                            </div>

                            {/* Add to Cart */}
                            <button className="flex-1 bg-[#EF7E6A] text-white font-bold h-[54px] rounded-md hover:bg-[#E56A52] transition uppercase tracking-widest text-[14px] flex items-center justify-center gap-2">

                                <FiShoppingCart className="text-lg" />
                                ADD TO CART

                            </button>

                        </div>

                        {/* Wishlist */}
                        <button className="w-full border border-[#EF7E6A] text-[#EF7E6A] font-bold h-[54px] rounded-md hover:bg-[#fff5f3] transition uppercase tracking-widest text-[14px] flex items-center justify-center gap-2">

                            <FiHeart className="text-lg" />
                            ADD TO WISHLIST

                        </button>

                    </div>

                    <p className="text-[12px] text-[#303030] font-[500]">
                        <span className="font-bold">Note:</span> Free shipping is only available
                        when full cart value exceeds $99.99.
                    </p>

                    {/* Social & Shipping */}
                    <div className="flex flex-col gap-4 mt-6">

                        {/* Social */}
                        <div className="flex flex-col gap-3">

                            <p className="text-[16px] text-[#303030] font-[400] uppercase tracking-wide">
                                SHARE ON SOCIAL MEDIA:
                            </p>

                            <div className="flex items-center flex-wrap gap-2 text-[#E57661] text-[17px]">

                                <FaFacebookF className="cursor-pointer hover:opacity-70 transition" />
                                <FaInstagramSquare className="cursor-pointer hover:opacity-70 transition" />
                                <FaXTwitter className="cursor-pointer hover:opacity-70 transition" />
                                <FaThreads className="cursor-pointer hover:opacity-70 transition" />
                                <FaLinkedin className="cursor-pointer hover:opacity-70 transition" />

                            </div>

                        </div>

                        {/* Shipping */}
                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-3">
                                <img
                                    src="https://res.cloudinary.com/daup99ghe/image/upload/v1776845013/Vector_5_rrbuyb.png"
                                    alt="truck"
                                    className="w-5 h-5 object-contain"
                                />

                                <span className="text-[15px] text-[#303030] font-[500]">
                                    Get FREE Shipping on orders above $99
                                </span>
                            </div>

                            <div className="flex items-center gap-3">

                                <img
                                    src="https://res.cloudinary.com/daup99ghe/image/upload/v1776845077/Group_1171275256_1_pnkjrt.png"
                                    alt="return"
                                    className="w-5 h-5 object-contain"
                                />

                                <span className="text-[15px] text-[#303030] font-[500]">
                                    Easy Return Process
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Guidance Box */}
                    <div className="mt-8 w-full">

                        <div className="border border-[#E5E5E5] rounded-[14px] px-4 min-[500px]:px-5 py-5 bg-[#FCFCFC] flex flex-col min-[500px]:flex-row items-start min-[500px]:items-center gap-4 min-[500px]:gap-0 justify-between">

                            <div className="flex flex-col">

                                <div className="flex flex-row items-center gap-2">

                                    <img
                                        src="https://res.cloudinary.com/daup99ghe/image/upload/v1776845076/Customer_Service_1_kuhcib.png"
                                        alt="customer-service"
                                        className="w-8 h-8 object-contain flex-shrink-0"
                                    />

                                    <h3 className="text-[24px] leading-none font-[500] text-[#E57661]">
                                        Need any Guidance?
                                    </h3>

                                </div>

                                <p className="mt-2 text-[15px] text-[#303030] opacity-80">
                                    Connect with an expert for your assistance.
                                </p>

                            </div>

                            <button className="h-[48px] w-full min-[500px]:w-auto px-6 py-2 border border-[#E57661] text-[#E57661] text-[13px] font-[500] uppercase tracking-widest hover:bg-[#E57661] hover:text-white transition whitespace-nowrap rounded-sm">
                                CONTACT US
                            </button>

                        </div>

                    </div>

                    {/* Certifications */}
                    <div className="flex flex-col min-[500px]:flex-row items-start min-[500px]:items-center gap-4 min-[500px]:justify-between w-full">

                        <div className="flex items-center gap-3">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776790906/Lab_Tested_lntale.png"
                                alt="lab"
                                className="w-7 h-7 object-contain"
                            />
                            <span className="text-[15px] font-[400] text-[#303030]">
                                Lab Tested
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776790906/Expert_Verified_mgwfw3.png"
                                alt="expert"
                                className="w-7 h-7 object-contain"
                            />
                            <span className="text-[15px] font-[400] text-[#303030]">
                                Expert Verified
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <img
                                src="https://res.cloudinary.com/daup99ghe/image/upload/v1776790906/Gia_Certified_uh1ebk.png"
                                alt="gia"
                                className="w-7 h-7 object-contain"
                            />
                            <span className="text-[15px] font-[400] text-[#303030]">
                                Gia Certified
                            </span>
                        </div>

                    </div>

                </div>
            </div>

            {/* Tabs Section */}
            <div className="max-w-7xl mx-auto px-5 min-[500px]:px-20 py-10 min-[500px]:py-16">

                <div className="flex gap-6 min-[500px]:gap-12 mb-10 min-[500px]:mb-16 border-b border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide">

                    {['description', 'benefits', 'astrologicalSignificance', 'wearingMethod', 'certification'].map((tab) => (

                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[14px] font-[500] uppercase tracking-[0.11em] pb-6 relative transition-all ${
                                activeTab === tab
                                    ? 'text-[#E57661] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E57661]'
                                    : 'text-[#303030]'
                            }`}
                        >

                            {tab === 'description' && 'DESCRIPTION'}
                            {tab === 'benefits' && 'BENEFITS'}
                            {tab === 'astrologicalSignificance' && 'ASTROLOGICAL SIGNIFICANCE'}
                            {tab === 'wearingMethod' && 'WEARING METHOD'}
                            {tab === 'certification' && 'CERTIFICATION'}

                        </button>

                    ))}

                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12">

                    {/* Left */}
                    <div className="flex flex-col gap-14">

                        {activeTab === 'description' && (
                            <>

                                <p className="text-[#303030] text-[16px] leading-[1.8] font-normal">
                                    {product.tabs?.description || product.description}
                                </p>

                                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-8 min-[500px]:gap-20">

                                    {/* Physical Attributes */}
                                    <div className="flex flex-col gap-8">

                                        <h4 className="text-[20px] font-medium text-[#E57661]">
                                            Physical Attributes
                                        </h4>

                                        <div className="flex flex-col gap-6">

                                            <div className="flex justify-between text-[15px]">
                                                <span className="text-[#303030] font-medium">
                                                    Weight:
                                                </span>

                                                <span className="text-[#303030] font-medium">
                                                    {product.physicalAttributes?.weight || '4.25 Carats'}
                                                </span>
                                            </div>

                                            <div className="flex justify-between text-[15px]">

                                                <span className="text-[#303030] font-medium">
                                                    Cut:
                                                </span>

                                                <span className="text-[#303030] font-medium">
                                                    {product.physicalAttributes?.cut || 'Oval Mixed Cut'}
                                                </span>

                                            </div>

                                            <div className="flex justify-between text-[15px]">

                                                <span className="text-[#303030] font-medium">
                                                    Origin:
                                                </span>

                                                <span className="text-[#303030] font-medium">
                                                    {product.physicalAttributes?.origin || 'Burma (Myanmar)'}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Vedic Details */}
                                    <div className="flex flex-col gap-8">

                                        <h4 className="text-[20px] font-medium text-[#E57661]">
                                            Vedic Details
                                        </h4>

                                        <div className="flex flex-col gap-6">

                                            <div className="flex justify-between text-[15px]">

                                                <span className="text-[#303030] font-medium">
                                                    Day:
                                                </span>

                                                <span className="text-[#303030] font-medium">
                                                    {product.vedicDetails?.day || 'Sunday Morning'}
                                                </span>

                                            </div>

                                            <div className="flex justify-between text-[15px]">

                                                <span className="text-[#303030] font-medium">
                                                    Finger:
                                                </span>

                                                <span className="text-[#303030] font-medium">
                                                    {product.vedicDetails?.finger || 'Ring Finger'}
                                                </span>

                                            </div>

                                            <div className="flex justify-between text-[15px]">

                                                <span className="text-[#303030] font-medium">
                                                    Metal:
                                                </span>

                                                <span className="text-[#303030] font-medium">
                                                    {product.vedicDetails?.metal || 'Gold / Copper'}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </>
                        )}

                        {activeTab !== 'description' && (

                            <div className="flex flex-col gap-8">

                                <h4 className="text-[20px] font-bold text-[#E57661] uppercase tracking-wider">
                                    {activeTab.replace(/([A-Z])/g, ' $1')}
                                </h4>

                                <p className="text-[#303030] text-[18px] leading-[1.8]">
                                    {product.tabs?.[activeTab] || `Information about ${activeTab} will be available soon.`}
                                </p>

                            </div>

                        )}

                    </div>

                    {/* Right */}
                    <div className="flex flex-col">

                        <div className="bg-[#E57661] rounded-[22px] p-5 min-[500px]:p-8 text-white relative overflow-hidden">

                            <h3 className="text-[23px] font-bold mb-3">
                                Wearing Ritual
                            </h3>

                            <p className="text-white text-[15px] leading-[1.8] font-normal mb-5 opacity-90">
                                To activate this Ruby, it must be purified in raw milk and gangajal, then energized with the Surya Beej Mantra:
                            </p>

                            <div className="bg-white rounded-lg p-1 mb-6 flex items-center justify-center text-center">

                                <p className="text-[#E57661] text-[17px] font-[400] italic leading-relaxed">
                                    "Om Hram Hreem Hraum Sah Suryaya Namah"
                                </p>

                            </div>

                            <button className="flex items-center gap-2 text-[14px] font-[400] border-b border-white pb-1 hover:gap-3 transition-all uppercase tracking-widest">

                                Download Full Ritual Guide

                                <FiArrowRight className="text-lg" />

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetailSection;