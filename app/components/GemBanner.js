import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import "./GemBanner.css";

export default function GemBanner() {
    return (
        <section className="gem-banner">
            <div className="gem-banner__content">
                <h1>
                  Transform Your Space with Vastu Align Your Life with Astrology
                </h1>

                <p className="subtitle">
                   Create balance, attract success, and unlock positive energy in every aspect of life.
                </p>

                <div className="cta-buttons">
                    <button className="btn primary">
                        <IoCall className="btn-icon" />
                        Call Us
                    </button>

                    <button className="btn outline">
                        <FaWhatsapp className="btn-icon" />
                        Chat Now
                    </button>
                </div>

                <div className="reviews">
                    <p>
                        “1000+ Happy Clients | Proven Results
                    </p>
                    {/* <div className="review-item">
                        <img
                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1766993726/Google-Review-Logo_2_wgalto.png"
                            alt="Google Reviews"
                            className="review-img"
                        />
                    </div>

                    <div className="review-item">
                        <img
                            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1766993725/Layer_1_1_w66ghg.png"
                            alt="Trustpilot Reviews"
                            className="review-img"
                        />
                    </div> */}
                </div>

            </div>
        </section>
    );
}
