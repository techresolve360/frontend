"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Modal from "../../Components/ContactFormModal";
import { FaPhoneAlt, FaHandshake, FaCheckCircle } from "react-icons/fa";

// ===== Styled Components =====
const SectionWrapper = styled.div`
  padding: 0 70px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;

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
  font-family: "Poppins", sans-serif;
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
  font-family: "Montserrat", sans-serif;
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

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;

`;

const Card = styled.div`
  background: rgba(17, 17, 17, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  flex: 1 1 400px;
  max-width: 500px;
  margin: 0; /* removed margin to eliminate space */

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #00c4ff;
    margin-bottom: 12px;

    span {
      color: #fff;
    }
  }

  p {
    font-size: 16px;
    color: #ddd;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .steps {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      svg {
        color: #00c4ff;
        font-size: 32px;
      }

      span {
        font-size: 14px;
        font-weight: 600;
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }

    .steps div svg {
      font-size: 28px;
    }

    .steps div span {
      font-size: 12px;
    }
  }
`;

const Divider = styled.div`
  width: 60%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px auto;
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
  font-family: "Poppins", sans-serif;

  &:hover {
    background: #005fcc;
  }

  @media (max-width: 480px) {
    padding: 12px 28px;
    font-size: 0.9rem;
  }
`;

// ===== Component =====
export default function HelpAndFees() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      style={{
        padding: "40px 0",
        backgroundImage: "url('/RBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
            <span>Simple. Transparent. Fair.</span> Start with just{" "}
            <Highlight>₹3540</Highlight> to access all services. <br />
            <em>You pay only when your loan is settled!</em>
          </FeesSubText>

          {/* Cards Side by Side */}
          <CardsContainer>
            {/* No Settlement Card */}
            <Card>
              <h3>
                No Settlement, <span>No Fees</span>
              </h3>
              <p>
                We only charge after your loan or credit card debt is successfully
                settled. There’s no upfront cost, no hidden charges, and no risk
                to you.
              </p>

              <div className="steps">
                <div>
                  <FaPhoneAlt />
                  <span>Contact Us</span>
                </div>
                <div>
                  <FaHandshake />
                  <span>We Negotiate</span>
                </div>
                <div>
                  <FaCheckCircle />
                  <span>Pay After Settlement</span>
                </div>
              </div>
            </Card>

            {/* Fee Card */}
            <Card>
              <h3>
                Start with ₹3540/- <span>including GST</span>
              </h3>
              <p>One-time fee to begin services</p>
              <Divider />
              <h3>Pay Only on Settlement</h3>
              <p>No hidden charges. 100% transparency.</p>
            </Card>
          </CardsContainer>
        </motion.div>
      </FeesSection>

      <ButtonWrapper>
        <GetStartedButton onClick={() => setIsModalOpen(true)}>
          Get Started
        </GetStartedButton>
      </ButtonWrapper>

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
