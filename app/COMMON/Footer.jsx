"use client";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FiInstagram, FiTwitter} from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function Footer() {
    return (
        <footer className="bg-[#F7F8F9] text-[#2d2d2d]">
            <div className="max-w-[1350px] mx-auto px-6 md:px-10 py-12">

                {/* TOP GRID */}
                <div className="grid grid-cols-1  xl:grid-cols-[30%_69%] gap-15">

                    {/* LEFT SECTION */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <Image
                                src="/favicon.ico"
                                alt="Logo"
                                width={60}
                                height={60}
                            />
                        </div>

                        <p className="text-lg leading-relaxed max-w-[450px] xl:max-w-[350px] text-[#303030] mb-6">
                            Shop God dresses online specifically the ethnic ones with Indian
                            traditional mix, simply glorifies the god statues.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-4">
                            <a href="#" className="flex items-center justify-center   transition">
                                <FiInstagram className="text-[#0A243F]" size={36} />
                            </a>
                            <a href="#" className="flex items-center justify-center transition">
                               
                                <FaSquareXTwitter className="text-[#0A243F]" size={36}  />
                            </a>
                            <a href="#" className=" flex items-center justify-center  transition">
                                <FaFacebook className="text-[#0A243F]" size={36} />
                            </a>
                        </div>
                    </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-[30%_30%_40%] md:gap-0 gap-10 ">
                       {/* USEFUL LINKS */}
                    <div>
                        <h3 className="font-[500] text-lg mb-4">Useful Links</h3>
                        <ul className="space-y-3 text-[#3F3F50] text-[16px]">
                            <li><a href="#" className="hover:text-black">Our Story</a></li>
                            <li><a href="#" className="hover:text-black">Explore Dresses</a></li>
                            <li><a href="#" className="hover:text-black">Gallery</a></li>
                            <li><a href="#" className="hover:text-black">Contact us</a></li>
                        </ul>
                    </div>

                    {/* CATEGORIES */}
                    <div>
                        <h3 className="font-[500] text-lg mb-4">Categories</h3>
                        <ul className="space-y-3 text-[#3F3F50] text-[16px]">
                            <li><a href="#" className="hover:text-black">Radha Krishna</a></li>
                            <li><a href="#" className="hover:text-black">Mata Rani</a></li>
                            <li><a href="#" className="hover:text-black">Laddo Gopal</a></li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h3 className="font-[500] text-lg mb-4">Contact Info</h3>
                        <p className="text-[16px] text-[#3F3F50] mb-4">
                            Our Support team is here to assist you
                        </p>

                        <div className="space-y-4 text-[16px] text-[#3F3F50]">

                            {/* EMAIL */}
                            <a
                                href="mailto:info@SriDivyam.com"
                                className="flex items-center gap-3 hover:text-black"
                            >
                                <FiMail size={18} className="text-[#7A1F3D]" />
                                info@SriDivyam.com
                            </a>

                            {/* PHONE */}
                            <a
                                href="tel:+12195550114"
                                className="flex items-center gap-3 hover:text-black"
                            >
                                <FiPhone size={18}  className="text-[#7A1F3D]"/>
                                (219) 555-0114
                            </a>

                            {/* LOCATION */}
                            <a
                                href="https://maps.google.com/?q=3891 Ranchview Dr, Richardson, California 62639"
                                target="_blank"
                                className="flex items-start gap-3 hover:text-black"
                            >
                                <FiMapPin  size={18} className="mt-1 text-[#7A1F3D]" />
                                <span>
                                    3891 Ranchview Dr. <br />
                                    Richardson, California 62639
                                </span>
                            </a>

                        </div>
                    </div>
                 </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-12  pt-6 flex flex-col md:flex-row justify-between items-center  text-gray-500 gap-4">
                    <p className="text-[16px]">@2026 Sri Divyam. All right Reserved</p>

                    <div className="flex gap-6 text-[16px] md:mr-10">
                        <a href="#" className="hover:text-black tracking-wider">Terms And Condition</a>
                        <a href="#" className="hover:text-black tracking-wider">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}