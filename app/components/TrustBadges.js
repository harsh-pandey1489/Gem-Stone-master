'use client';

import './TrustBadges.css';

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="badge-item">
        <img src="/images/natural-certified.png" alt="Natural Certified" className="badge-img" />
        <p>100% Natural &<br />Certified</p>
      </div>

      <div className="badge-item">
        <img src="/images/emi.png" alt="0% EMI" className="badge-img" />
        <p>0% on EMI</p>
      </div>

      <div className="badge-item">
        <img src="/images/worldwide-shipping.png" alt="Worldwide Shipping" className="badge-img" />
        <p>Worldwide Shipping</p>
      </div>

      <div className="badge-item">
        <img src="/images/energized-stones.png" alt="Energized Stones" className="badge-img" />
        <p>Energized Stones</p>
      </div>

      <div className="badge-item">
        <img src="/images/easy-return.png" alt="Easy Return" className="badge-img" />
        <p>Easy Return</p>
      </div>
    </section>
  );
}
