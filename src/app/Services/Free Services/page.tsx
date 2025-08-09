"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 40px 70px ;
  background: #fffff;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 250px;
  text-align: start;
    font-family: 'Poppins', sans-serif;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
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
  font-weight: 700;
  color: #000;
  margin-bottom: 6px;
`;

const StatDesc = styled.div`
  font-size: 0.95rem;
  color: #333;
  flex-grow: 1;
`;

const FinalNote = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: italic;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 8px;
  text-align: center; 

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }   
`;


export default function CyberFraudStats() {
  return (
    <Section>
      <Heading>
        Free <span>Services</span>
      </Heading>
      <Subheading>Your journey to financial peace begins here!</Subheading>

      <CardsContainer>
        {[
          {
            icon: "/icons/Online Consultation.png",
            title: "Online Consultation",
            desc: "Speak to our expert team and share your concerns at no cost.",
            delay: 0.0,
          },
          {
            icon: "/icons/Case Evaluation.png",
            title: "Case Evaluation",
            desc: "We create repayment plans that fit your finances and ease creditor demands.",
            delay: 0.1,
          },
          {
            icon: "/icons/Solutions.png",
            title: "Customized Solutions & Fee Proposal",
            desc: "Receive a personalized roadmap to tackle your financial challenges, with a transparent fee structure for our paid services.",
            delay: 0.2,
          },

        ].map((item, idx) => (
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
                <StatDesc>{item.desc}</StatDesc>
              </StatContent>
            </Card>
          </motion.div>
        ))}
      </CardsContainer>

      <FinalNote>
        Take the first step today!
      </FinalNote>
    </Section>
  );
}
