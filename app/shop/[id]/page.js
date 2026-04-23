import React from 'react';
import Navbar from '../../COMMON/Navbar';
import ProductDetailSection from '../../components/ProductDetailSection';

export const metadata = {
    title: 'Product Details | Gemstone Website',
    description: 'View detailed information about our gemstones.',
};

// Sample product data - Replace with dynamic data from API/Database later
const PRODUCTS_DATA = {
    1: {
        id: 1,
        name: 'Natural Ruby (Manik)',
        subtitle: 'Imperial Grade Pigeon Blood Red',
        price: 959.99,
        rating: 4.8,
        reviews: 73,
        tag: 'FOR WEALTH & LEADERSHIP',
        image: 'https://res.cloudinary.com/daup99ghe/image/upload/v1776751680/Ruby_Manik_xhvk84.png',
        imageBg: 'bg-[#F6F1EA]',
        description: 'The "Pigeon Blood" Ruby is the most sought-after variety of Corundum. This specific specimen hails from the historic mines of Burma (Myanmar), known for producing stones with an unparalleled inner glow.',
        physicalAttributes: {
            weight: '4.25 Carats',
            cut: 'Oval Mixed Cut',
            origin: 'Burma (Myanmar)',
        },
        vedicDetails: {
            day: 'Sunday Morning',
            finger: 'Ring Finger',
            metal: 'Gold / Copper',
        },
        wearingRitual: {
            title: 'Wearing Ritual',
            instructions: 'To activate this Ruby, it must be purified in raw milk and gangajal, then energized with the Surya Beej Mantra:',
            mantra: '"Om Hram Hreem Hraum Sah Suryaya Namah"',
            downloadLink: 'Download Full Ritual Guide',
        },
        tabs: {
            description: 'The "Pigeon Blood" Ruby is the most sought-after variety of Corundum. This specific specimen hails from the historic mines of Burma (Myanmar), known for producing stones with an unparalleled inner glow.',
            benefits: 'Enhances leadership qualities, boosts confidence, attracts wealth and success, improves health and vitality.',
            astrologicalSignificance: 'Ruled by the Sun, Ruby strengthens your solar plexus chakra and aligns you with solar energy for power and authority.',
            wearingMethod: 'Wear in a gold ring on the right ring finger on Sunday morning.',
            certification: 'Lab Tested, Expert Verified, Gia Certified',
        },
        trustBadges: [
            { icon: '✓', text: 'Lab Tested' },
            { icon: '✓', text: 'Expert Verified' },
            { icon: '✓', text: 'Gia Certified' },
        ],
        shippingNote: 'Free shipping is only available when full cart value exceeds $99.99.',
    },
    2: {
        id: 2,
        name: 'Blue Sapphire (Neelam)',
        subtitle: 'Royal Blue Premium Quality',
        price: 890.00,
        rating: 4.7,
        reviews: 56,
        tag: 'FOR DISCIPLINE & FOCUS',
        image: 'https://res.cloudinary.com/daup99ghe/image/upload/v1776751679/Blue_Sapphire_Neelam_ovbhn5.png',
        imageBg: 'bg-black',
        description: 'The gem of Saturn, bringing focus and rapid karmic alignment for serious spiritual seekers. This premium Blue Sapphire displays the perfect balance of deep color and transparency.',
        physicalAttributes: {
            weight: '3.85 Carats',
            cut: 'Cushion Cut',
            origin: 'Sri Lanka',
        },
        vedicDetails: {
            day: 'Saturday Morning',
            finger: 'Middle Finger',
            metal: 'Silver / Steel',
        },
        wearingRitual: {
            title: 'Wearing Ritual',
            instructions: 'To activate this Blue Sapphire, immerse in fresh water, then energize with the Saturn Mantra:',
            mantra: '"Om Praam Preem Praum Sah Shaniaye Namah"',
            downloadLink: 'Download Full Ritual Guide',
        },
        tabs: {
            description: 'The gem of Saturn, bringing focus and rapid karmic alignment for serious spiritual seekers. This premium Blue Sapphire displays the perfect balance of deep color and transparency.',
            benefits: 'Enhances concentration, promotes discipline, brings financial stability, protects from negative influences.',
            astrologicalSignificance: 'Ruled by Saturn, Sapphire strengthens your ability to face challenges and karmic lessons with wisdom and patience.',
            wearingMethod: 'Wear in a silver or steel ring on the middle finger on Saturday morning.',
            certification: 'Lab Tested, Expert Verified, Gia Certified',
        },
        shippingNote: 'Free shipping is only available when full cart value exceeds $99.99.',
    },
    3: {
        id: 3,
        name: 'Emerald (Panna)',
        subtitle: 'Vivid Green Natural Stone',
        price: 1020.00,
        rating: 4.9,
        reviews: 89,
        tag: 'FOR WISDOM & COMMUNICATION',
        image: 'https://res.cloudinary.com/daup99ghe/image/upload/v1776753945/Emerald_Panna_oqa6uw.png',
        imageBg: 'bg-[#E8F3F1]',
        description: 'Harness Mercury\'s sharp intellect and communication power for business success. This natural Emerald brings clarity and insight to decision-making.',
        physicalAttributes: {
            weight: '3.50 Carats',
            cut: 'Emerald Cut',
            origin: 'Zambia',
        },
        vedicDetails: {
            day: 'Wednesday Morning',
            finger: 'Pinky Finger',
            metal: 'Gold / Silver',
        },
        wearingRitual: {
            title: 'Wearing Ritual',
            instructions: 'To activate this Emerald, purify in ghee and raw milk, then energize with the Mercury Mantra:',
            mantra: '"Om Bram Breem Braum Sah Budhaya Namah"',
            downloadLink: 'Download Full Ritual Guide',
        },
        tabs: {
            description: 'Harness Mercury\'s sharp intellect and communication power for business success. This natural Emerald brings clarity and insight to decision-making.',
            benefits: 'Improves communication skills, enhances business acumen, brings prosperity, promotes mental clarity.',
            astrologicalSignificance: 'Ruled by Mercury, Emerald activates your throat chakra and intellect center for better expression and business dealings.',
            wearingMethod: 'Wear in a gold or silver ring on the pinky finger on Wednesday morning.',
            certification: 'Lab Tested, Expert Verified, Gia Certified',
        },
        shippingNote: 'Free shipping is only available when full cart value exceeds $99.99.',
    },
    4: {
        id: 4,
        name: 'Yellow Sapphire (Pukhraj)',
        subtitle: 'Golden Radiant Premium Grade',
        price: 1550.00,
        rating: 4.9,
        reviews: 124,
        tag: 'FOR PROSPERITY & FORTUNE',
        image: 'https://res.cloudinary.com/daup99ghe/image/upload/v1776753944/Yellow_Sapphire_Pukhraj_ddkt9o.png',
        imageBg: 'bg-[#FDF7E7]',
        description: 'Jupiter\'s stone for fortune, abundance, and marital bliss. A symbol of royal grace and success.',
        physicalAttributes: {
            weight: '4.75 Carats',
            cut: 'Round Mixed Cut',
            origin: 'Thailand',
        },
        vedicDetails: {
            day: 'Thursday Morning',
            finger: 'Index Finger',
            metal: 'Gold',
        },
        wearingRitual: {
            title: 'Wearing Ritual',
            instructions: 'To activate this Yellow Sapphire, soak in honey and milk, then energize with the Jupiter Mantra:',
            mantra: '"Om Gram Greem Graum Sah Guruive Namah"',
            downloadLink: 'Download Full Ritual Guide',
        },
        tabs: {
            description: 'Jupiter\'s stone for fortune, abundance, and marital bliss. A symbol of royal grace and success.',
            benefits: 'Attracts wealth and prosperity, enhances wisdom, promotes good health, brings matrimonial harmony.',
            astrologicalSignificance: 'Ruled by Jupiter, Pukhraj expands your luck and fortune, bringing abundance in all areas of life.',
            wearingMethod: 'Wear in a gold ring on the index finger on Thursday morning.',
            certification: 'Lab Tested, Expert Verified, Gia Certified',
        },
        shippingNote: 'Free shipping is only available when full cart value exceeds $99.99.',
    },
};

export default function ProductDetailPage({ params }) {
    const product = PRODUCTS_DATA[params.id] || PRODUCTS_DATA[1];

    return (
        <main className="min-h-screen" style={{ background: 'radial-gradient(140.3% 104.29% at 10% 20%, rgba(254, 212, 136, 0.15) 0%, #F8F9FA 90%)' }}>
            <Navbar />
            <ProductDetailSection product={product} />
        </main>
    );
}
