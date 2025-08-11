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
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
  text-align: start;
  font-family: 'Poppins', sans-serif;

  span {
    color: #0073D7;
  }

    @media (max-width: 992px) {
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 20px 0;
  align-items: stretch; /* Ensures equal card height */
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%; /* Equal height in grid */
  min-height: 200px; /* Reduced height */
  text-align: start;
  font-family: 'Poppins', sans-serif;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 12px;
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
  justify-content: flex-start;
`;

const StatTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 6px;
`;

export default function CyberFraudStats() {
  return (
    <Section>
      <Heading>
        Why We <span>Stand Out</span>
      </Heading>

      <CardsContainer>
        {[
          {
            icon: "/icons/icon1.png",
            title: "Ethical and Transparent Solutions",
            delay: 0.0,
          },
          {
            icon: "/icons/icon2.png",
            title: "Proven Expertise in Loan Settlement",
            delay: 0.1,
          },
          {
            icon: "/icons/icon3.png",
            title: "Dedicated Support at Every Step",
            delay: 0.2,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            style={{ height: "100%" }} // Ensures motion wrapper matches card height
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
              </StatContent>
            </Card>
          </motion.div>
        ))}
      </CardsContainer>
    </Section>
  );
}
