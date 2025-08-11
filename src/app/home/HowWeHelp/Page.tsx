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
  padding: 60px 70px;
  color: #fff;
  text-align: left;

  @media (max-width: 768px) {
    padding: 40px 20px;
    text-align: center;
  }
`;

const FeesHeading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    justify-content: center;

    img {
      width: 36px;
      height: 36px;
    }
  }
`;

const FeesSubText = styled.p`
  font-size: 26px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  max-width: 100%;
  text-align: center;
  margin: 10px 0 30px 0;
  line-height: 1.5;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeeCard = styled.div`
  background: #111;
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  text-align: center;

  h4 {
    font-size: clamp(0.85rem, 1.5vw, 1rem);
    font-weight: 500;
    color: #bbb;
  }

  h3 {
    font-size: clamp(1.2rem, 2.2vw, 1.5rem);
    font-weight: bold;
    color: #00aaff;
  }

  span {
    font-size: clamp(0.8rem, 1.3vw, 0.9rem);
    color: #bbb;
  }

  p {
    font-size: clamp(0.85rem, 1.4vw, 1rem);
    font-weight: 500;
    color: #fff;
  }
`;

const Note = styled.p`
  background: #007bff;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  width: 100%;
  text-align: center;
  margin: 20px 0;
  box-sizing: border-box;

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
        <FeesHeading>
          <img src="/rupee-icon.png" alt="Rupee" /> Competitive Fees
        </FeesHeading>
        <FeesSubText>
          Competition charges 12% to 20% of your total loan outstanding as fee.
          Our fee is most affordable in the Industry in India. Transparent and
          same for all as given below.
        </FeesSubText>

        <CardsRow>
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <FeeCard>
                <h4>{item.title}</h4>
                <h3>{item.price}</h3>
                <span>{item.months}</span>
                <p>{item.monthly}</p>
              </FeeCard>
            </motion.div>
          ))}
        </CardsRow>

        <Note>
          <span>*</span> Above <span>50 lac</span> Fee to agreed on call
        </Note>
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