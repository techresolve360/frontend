"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 40px 70px;
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

const Subheading = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #0073D7;
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

export default function CyberFraudStats() {
  // All cards data grouped by sections
  const sections = [
    {
      subheading: "❯❯ Reduce our Debt by 60%",
      cards: [
        {
          icon: "/icons/Request.png",
          title: "Moratorium Request",
          desc: "We secure moratoriums to pause payments and ease financial stress.",
          delay: 0.0,
        },
        {
          icon: "/icons/Repayment.png",
          title: "Repayment Plan Structuring",
          desc: "We create repayment plans that fit your finances and ease creditor demands.",
          delay: 0.1,
        },
        {
          icon: "/icons/Settlement.png",
          title: "Settlement Negotiation",
          desc: "We secure fair, one-time debt settlements to help you move forward.",
          delay: 0.2,
        },
      ],
    },
    {
      subheading: "❯❯ Anti-Harassment Services",
      cards: [
        {
          icon: "/icons/HarassmentResolution.png",
          title: "Harassment Resolution",
          desc: "We handle recovery agent issues, ensuring professional and lawful communication.",
          delay: 0.0,
        },
        {
          icon: "/icons/Forward.png",
          title: "Forward Communication",
          desc: "Redirect recovery calls to us, and we'll handle them stress-free.",
          delay: 0.1,
        },
        {
          icon: "/icons/Stress.png",
          title: "Stress-Free Resolution",
          desc: "Our goal is to protect your mental well-being while negotiating with creditors on your behalf.",
          delay: 0.2,
        },
      ],
    },
    {
      subheading: "❯❯ Legal Support",
      cards: [
        {
          icon: "/icons/RBI.png",
          title: "RBI Guidelines Compliance",
          desc: "We ensure all actions follow RBI guidelines, safeguarding you from unfair practices.",
          delay: 0.0,
        },
        {
          icon: "/icons/Assistance.png",
          title: "Comprehensive Assistance",
          desc: "we offer complete legal support ranging from anti harassment services to execution of loan settlement agreements.",
          delay: 0.1,
        },
        {
          icon: "/icons/Representation.png",
          title: "Experienced Representation",
          desc: "If your case goes to court, our lawyers protect your interests for the best outcome.",
          delay: 0.2,
        },
      ],
    },
    {
      subheading: "❯❯ Custom Solution for You",
      cards: [
        {
          icon: "/icons/Debt.png",
          title: "Debt Review and Strategy",
          desc: "Our experts create realistic and impactful repayment or settlement plans based on your debt profile.",
          delay: 0.0,
        },
        {
          icon: "/icons/Securing.png",
          title: "Securing Financial Stability",
          desc: "With our step-by-step guidance, you'll gain clarity, confidence, and control over your finances",
          delay: 0.1,
        },
        {
          icon: "/icons/Plans.png",
          title: "Customized Financial Plans",
          desc: "We assess your finances and create tailored strategies to tackle your challenges.",
          delay: 0.2,
        },
      ],
    },
  ];

  return (
    <Section>
      <Heading>
        Tailored Services to <span>Meet Your Needs</span>
      </Heading>

      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <Subheading>{section.subheading}</Subheading>
          <CardsContainer>
            {section.cards.map((item, idx) => (
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
        </div>
      ))}
    </Section>
  );
}
