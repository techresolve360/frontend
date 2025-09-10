"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../Components/ContactFormModal";

// ===== Styled Components =====
const SectionWrapper = styled.div`
  padding: 0px 70px;
  

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 40px;
    font-family: 'Poppins', sans-serif;

  span {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: start;
  }
`;

const FullWidthImage = styled.img`
  width: 100%;
  padding-bottom: 70px;
  display: block;

  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
`;

const FeesSection = styled.section`
  background-image: url("/fees-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 60px;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const FeesHeading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  img {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const FeesSubText = styled.p`
  font-size: 22px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  max-width: 800px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
  color: #e0e0e0;

  span {
    font-weight: 600;
    font-size: 24px;
    color: #00c4ff;
  }

  em {
    font-style: normal;
    font-weight: 600;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    span {
      font-size: 20px;
    }
  }
`;

const Highlight = styled.span`
  color: #00c4ff;
  font-weight: 700;
`;

const FeeCard = styled.div`
  background: rgba(17, 17, 17, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 40px 30px;
  margin: 0 auto 30px auto;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #00c4ff;
    margin-bottom: 6px;
  }

  p {
    font-size: 16px;
    color: #ddd;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Divider = styled.div`
  width: 60%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px auto;
`;

const Note = styled.p`
  background: linear-gradient(90deg, #007bff, #00c4ff);
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 14px 18px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 40px;
  justify-content: center;
  width: 100%;
`;

const GetStartedButton = styled.button`
  background: #007bff;
  border: none;
  color: #fff;
  padding: 14px 36px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background: #005fcc;
  }

  @media (max-width: 480px) {
    padding: 12px 28px;
    font-size: 0.9rem;
  }
`;

export default function HelpAndFees() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    { title: "Up to 10 lac", price: "₹ 60,000", months: "10 Months", monthly: "₹ 6,500/month" },
    { title: "11 to 20 lac", price: "₹ 85,000", months: "10 Months", monthly: "₹ 8,500/month" },
    { title: "21 to 30 lac", price: "₹ 1,10,000", months: "10 Months", monthly: "₹ 11,000/month" },
    { title: "31 to 40 lac", price: "₹ 1,35,000", months: "10 Months", monthly: "₹ 13,500/month" },
    { title: "41 to 50 lac", price: "₹ 1,60,000", months: "10 Months", monthly: "₹ 16,000/month" },
  ];

  return (
    <div 
    style={{ 
    padding: "40px 0", 
    backgroundImage: "url('/RBG.png')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
    }} >
      {/* Heading Before Infographic */}
      <SectionWrapper>
        <SectionHeading>
          How We <span>Help You</span>
        </SectionHeading>
      </SectionWrapper>

      {/* Responsive Infographic Image */}
      <picture>
        <source media="(max-width: 768px)" srcSet="/mobInfograph.png" />
        <FullWidthImage src="/steps-infographic.png" alt="How We Help You" />
      </picture>

      {/* Fees Section */}
          <FeesSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeesHeading>
          <img src="/rupee-icon.png" alt="Rupee" /> Our Fee Structure
        </FeesHeading>

        <FeesSubText>
          <span>Simple. Transparent. Fair.</span>  
          Start with just <Highlight>₹2999</Highlight> to access all services.  
          <br />
          <em>You pay only when your loan is settled!</em>
        </FeesSubText>

        <FeeCard>
          <h3>Start with ₹2999</h3>
          <p>One-time fee to begin services</p>
          <Divider />
          <h3>Pay Only on Settlement</h3>
          <p>No hidden charges. 100% transparency.</p>
        </FeeCard>

        <Note>
          <span>Fair & Transparent –</span> No % fees on loan outstanding like others.  
          Same affordable fee for everyone.
        </Note>
      </motion.div>
    </FeesSection>

      <ButtonWrapper>
        <GetStartedButton onClick={() => setIsModalOpen(true)}>
          Get Started
        </GetStartedButton>
      </ButtonWrapper>

      {/* Existing Modal Component */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}