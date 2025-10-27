"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  LeftSection,
  SocialIcons,
  MiddleSection,
  RightSection,
  FooterBottom,
  FooterLogo,
  SocialIconsWrapper,
} from "../Styles/FooterStyles";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FooterContainer>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LeftSection>
            <Link href="/" passHref>
              <FooterLogo src="https://d2uvjal4nw1o1a.cloudfront.net/public/FLogo.png" alt="Logo" />
            </Link>
            <h3>Resove360 Across India</h3> <br />
            {/* <p>
              Led by Advocate Vipin Choudhary Transparent. Ethical. Always on your side.
            </p> */}
            <SocialIconsWrapper>
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
<SocialIcons>
  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/company/resolve-360/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#FFFFFF] hover:scale-110 transition-transform duration-200"
  >
    <FaLinkedin size={28} />
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/resolve.360/"  
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#FFFFFF] hover:scale-110 transition-transform duration-200"
  >
    <FaInstagram size={28} />
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/people/Resolve360/61571324170070/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#FFFFFF] hover:scale-110 transition-transform duration-200"
  >
    <FaFacebook size={28} />
  </a>
</SocialIcons>

</SocialIconsWrapper>
          </LeftSection>
        </motion.div>

        {/* Middle Section - Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MiddleSection>
            <p>Quick Links</p>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/Services">Services</a>
            <a href="/core-values">Core Values</a>
            <a href="/Resources">Blog</a>
          </MiddleSection>
        </motion.div>

        {/* Middle Section - Policies */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MiddleSection>
            <p>Policies</p>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </MiddleSection>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <RightSection>
            <p>Address</p>
            <a><strong>Bangalore Office:</strong> 994/79, 27th A main road, Jayanagar 9th block, Bangalore - 560041</a>
						 <a><strong>Gurgaon Office:</strong>  c/o 91 Springboard,  Level 2, Augusta Point, Golf Course Road, Sector 53, Gurugram , Haryana - 122002</a>

            <p>Call</p>
            <a>+91 99004 75500</a>

            <p>Email</p>
            <a href="mailto:support@resolve360.in">support@resolve360.in</a>
          </RightSection>
        </motion.div>

        {/* Footer Bottom */}
        <FooterBottom>
          © 2025 Resolve360. All rights reserved.
        </FooterBottom>
      </FooterContainer>
    </motion.div>
  );
}
