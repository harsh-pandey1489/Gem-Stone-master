'use client';
import { FiX, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import "./SearchPopup.css";

const GEMSTONES = [
    "Blue Sapphire (Neelam)",
    "Cats Eye",
    "Emerald (Panna)",
    "Hessonite (Gomed)",
    "Pearl (Moti)",
    "Ruby (Manik)",
    "Red Coral (Moonga)",
    "White Sapphire",
];

const PURPOSES = [
    "Health",
    "Career",
    "Wealth and Fortune",
    "Education",
    "Relationships",
];

const CARAT_WEIGHTS = [
    "0.5 Carat",
    "1 Carat",
    "2 Carat",
    "3 Carat",
    "5 Carat",
];

const PRICES = [
    "Below ₹10,000",
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "Above ₹1,00,000",
];


export default function SearchPopup({ onClose }) {
    const [type, setType] = useState("gemstone");
    const [gemstone, setGemstone] = useState("");
    const [purpose, setPurpose] = useState("");
    const [carat, setCarat] = useState("");
    const [price, setPrice] = useState("");


    return (
        <div
            className="fixed  flex items-center justify-center inset-0 z-[9999] bg-black/50 backdrop-blur-[1px] search-popup-overlay"
            onClick={onClose}
            style={{
                maxWidth: "1720px",
                margin: "0 auto"
            }}
        >
            {/* ✅ POPUP CARD */}
            <div
                className="absolute w-[340px] rounded-xl bg-white p-5 top-20  "
                
                onClick={(e) => e.stopPropagation()} // ❗IMPORTANT
            >
                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500"
                >
                    <FiX size={18} />
                </button>

                <h3 className="text-lg font-semibold mb-4">
                    Find Your Right Gemstone
                </h3>

                {/* RADIO */}
                <div className="flex gap-6 mb-4 text-sm">
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="searchType"
                            checked={type === "gemstone"}
                            onChange={() => setType("gemstone")}
                        />
                        <span className="radio-text">By Gemstone</span>
                    </label>

                    <label className="radio-label">
                        <input
                            type="radio"
                            name="searchType"
                            checked={type === "purpose"}
                            onChange={() => setType("purpose")}
                        />
                        <span className="radio-text">By Purpose</span>
                    </label>
                </div>

                {/* DROPDOWN */}
                {/* DROPDOWNS */}
                {type === "gemstone" ? (
                    <>
                        <CustomDropdown
                            placeholder="Select Gemstone"
                            options={GEMSTONES}
                            value={gemstone}
                            onChange={setGemstone}
                        />

                        <CustomDropdown
                            placeholder="Select Carat Weight"
                            options={CARAT_WEIGHTS}
                            value={carat}
                            onChange={setCarat}
                        />

                        <CustomDropdown
                            placeholder="Select Price"
                            options={PRICES}
                            value={price}
                            onChange={setPrice}
                        />
                    </>
                ) : (
                    <CustomDropdown
                        placeholder="General"
                        options={PURPOSES}
                        value={purpose}
                        onChange={setPurpose}
                    />
                )}


                <button className="mt-5 w-full rounded-lg bg-[#E57661] py-3 text-white font-medium">
                    Search
                </button>

                <div className="mt-4 flex justify-between text-xs text-[#E57661]">
                    <button>Talk to an Astrologer</button>
                    <button>Free Recommendation</button>
                </div>
            </div>
        </div>
    );
}

function CustomDropdown({ placeholder, options, value, onChange }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative mb-3">
            {/* INPUT */}
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between rounded-lg border px-4 py-3 text-sm cursor-pointer"
            >
                <span className={value ? "text-gray-800" : "text-gray-400"}>
                    {value || placeholder}
                </span>
                <FiChevronDown />
            </div>

            {/* OPTIONS */}
            {open && (
                <div className="absolute z-50 mt-1 w-full bg-white shadow-lg">
                    {options.map((item) => (
                        <div
                            key={item}
                            onClick={() => {
                                onChange(item);
                                setOpen(false);
                            }}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#E57661]/90 hover:text-white
                ${value === item ? "bg-[#E57661] text-white" : ""}
              `}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
