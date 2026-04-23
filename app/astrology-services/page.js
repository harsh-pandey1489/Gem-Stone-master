'use client';

import React from 'react';
import Navbar from '../COMMON/Navbar';
import AstrologyServicesHero from '../components/AstrologyServicesHero';
import AstrologyClarity from '../components/AstrologyClarity';
import DigitalBirthChart from '../components/DigitalBirthChart';

export default function AstrologyServicesPage() {
    return (
        <>
            <Navbar />
            <main>
                <AstrologyServicesHero />
                <AstrologyClarity />
                <DigitalBirthChart />
                {/* Additional sections for Astrology Services can be added here */}
            </main>
        </>
    );
}
