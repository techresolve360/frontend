"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
              <FooterLogo src="FLogo.png" alt="Logo" />
            </Link>
            <h3>Resove360 Across India</h3> <br />
            <p>
              Led by Advocate Vipin Choudhary Transparent. Ethical. Always on your side.
            </p>
            <SocialIconsWrapper>
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
  <SocialIcons>
    <a 
      href="https://www.linkedin.com/company/resolve-360/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
        src="linkedin1.png" 
        alt="LinkedIn" 
        className="w-6 h-6 hover:scale-110 transition-transform duration-200" 
      />
    </a>
    {/* Add more social icons here */}
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
            <a href="/about">About</a>
            <a href="/Services">Services</a>
            <a href="/Resources">Resources</a>
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
            <a>Baskara's Plaza, 2nd Floor, HSR  Layout Sector 6, 560102, Karnataka, Bangalore</a>

            <p>Call</p>
            <a>7044432779</a>

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
