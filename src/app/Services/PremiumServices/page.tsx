"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 40px 70px;
  background: #ffffff;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    padding: 25px 20px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 10px;
  text-align: start;
  font-family: 'Poppins', sans-serif;

  span {
    color: #0073D7;
  }
`;


const Subheading = styled.p`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 30px;
  text-align: start;
  font-family: 'Poppins', sans-serif;
`;


const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Always 3 columns on large screens */
  gap: 20px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on mobile */
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;


const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s ease;
  height: 100%;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ddd;
  margin: 8px 0;
`;

const StatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StatTitle = styled.div`
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.2rem);
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
`;

const StatDesc = styled.div`
  font-size: clamp(0.85rem, 1vw + 0.4rem, 0.95rem);
  color: #333;
  flex-grow: 1;

  ul {
    padding-left: 20px;
    margin: 0;
  }

  li {
    list-style-type: disc;
    margin-bottom: 6px;
  }

  p {
    margin: 0;
  }
`;

export default function CyberFraudStats() {
  const services = [
    {
      icon: "/icons/Communication.png",
      title: "We handle the communication with the bank",
      desc: [
        "Borrower is not a wilful defaulter",
        "Borrower has bonafide intentions",
        "Borrower is not denying their obligation to repay (as it is all documented)",
        "Borrower is facing temporary financial crisis and has inability to pay",
      ],
      delay: 0.0,
    },
    {
      icon: "/icons/Demand.png",
      title: "We handle your legal/demands from your lender",
      desc: [
        "lorem lorem lorem lorem lorem lorem.",
        "lorem lorem lorem lorem lorem lorem.",
        "lorem lorem lorem lorem lorem lorem.",
        "lorem lorem lorem lorem lorem lorem.",
      ],
      delay: 0.1,
    },
    {
      icon: "/icons/Harassment.png",
      title: "We free you from Anti-Harassment calls",
      desc: [
        "lorem lorem lorem lorem lorem lorem.",
        "lorem lorem lorem lorem lorem lorem.",
        "lorem lorem lorem lorem lorem lorem.",
        "lorem lorem lorem lorem lorem lorem.",
      ],
      delay: 0.2,
    },
    {
      icon: "/icons/Negotiate.png",
      title: "We negotiate to get your mental peace and freedom",
      desc: ["lorem lorem lorem lorem lorem lorem.", "lorem lorem lorem lorem lorem lorem."],
      delay: 0.0,
    },
    {
      icon: "/icons/Financial.png",
      title: "Gain your financial freedom to progress ahead",
      desc: ["lorem lorem lorem lorem lorem lorem.", "lorem lorem lorem lorem lorem lorem."],
      delay: 0.1,
    },
    {
      icon: "/icons/Peace.png",
      title: "Peace of Mind",
      desc: "You're not a criminal; you're simply going through a temporary financial crisis.",
      delay: 0.2,
    },
  ];

  return (
    <Section>
      <Heading>
        Our Premium <span>Services</span>
      </Heading>
      <Subheading>Tailored to deliver relief and peace of mind</Subheading>

      <CardsContainer>
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            <Card>
              <Icon src={item.icon} alt={`Icon ${idx + 1}`} />
              <Divider />
              <StatContent>
                <StatTitle>{item.title}</StatTitle>
                <StatDesc>
                  {Array.isArray(item.desc) ? (
                    <ul>
                      {item.desc.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.desc}</p>
                  )}
                </StatDesc>
              </StatContent>
            </Card>
          </motion.div>
        ))}
      </CardsContainer>
    </Section>
  );
}
