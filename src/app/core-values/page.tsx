"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function CoreValuesPage() {
  const values = [
    {
      title: "Client First",
      description:
        "We prioritize the interests and satisfaction of our clients above all else. Every decision, process, and innovation is driven by the goal of delivering maximum value and achieving positive outcomes for our clients, ensuring long-term relationships built on trust and reliability.",
    },
    {
      title: "Meritocracy",
      description:
        "We believe in recognizing and rewarding performance, talent, and results rather than hierarchy or tenure. Our culture promotes fairness, accountability, and continuous improvement, empowering individuals who demonstrate excellence and commitment to grow within the organization.",
    },
    {
      title: "Respect for Individual",
      description:
        "We treat every team member, client, and partner with dignity and fairness. We value diversity of thought, background, and perspective, ensuring that every individual feels heard, appreciated, and supported in contributing their best to the organization’s goals.",
    },
    {
      title: "Humane Approach",
      description:
        "We combine professionalism with empathy in all our actions. Our policies and practices are designed to balance business objectives with compassion, ensuring ethical decision-making, employee well-being, and a supportive environment where people thrive both personally and professionally.",
    },
  ];

  return (
    <PageWrapper>
      <HeaderSection
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>CORE <span>VALUES</span></Title>
        <Subtitle>
          The foundation of our culture — guiding our actions, shaping our
          relationships, and defining our success.
        </Subtitle>
      </HeaderSection>

      <ValuesGrid>
        {values.map((val, index) => (
          <ValueCard
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ValueNumber>{`0${index + 1}`}</ValueNumber>
            <ValueTitle>{val.title}</ValueTitle>
            <ValueDescription>{val.description}</ValueDescription>
          </ValueCard>
        ))}
      </ValuesGrid>
    </PageWrapper>
  );
}

/* ---------- Styled Components ---------- */
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 20px 80px;

  @media (max-width: 768px) {
    padding: 100px 16px 60px;
  }
`;

const HeaderSection = styled(motion.div)`
  text-align: center;
  max-width: 900px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
 font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
  font-family: 'Poppins', sans-serif;

  span {
    color: #0073d7;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ValueCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.7);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const ValueNumber = styled.span`
  font-size: 3.2rem;
  font-weight: 700;
  color: #e2e8f0;
  position: absolute;
  top: 16px;
  right: 24px;
  user-select: none;
`;

const ValueTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
`;
