"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 60px 70px;
  background: #ffffff;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 12px;
  text-align: start;
  font-family: 'Poppins', sans-serif;

  span {
    color: #0073D7;
  }
`;

const Subheading = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 40px;
  text-align: start;
  font-family: 'Poppins', sans-serif;
`;

// NEW GRID WRAPPER
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.08);
  padding: 25px 20px;
  font-family: 'Poppins', sans-serif;
  text-align: start;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
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

const ServiceTitle = styled.h3`
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.2rem);
  font-weight: 700;
  color: #000;
  margin-bottom: 10px;
`;

const ServiceDesc = styled.div`
  font-size: 0.95rem;
  color: #222;
  line-height: 1.6;

  ul {
    padding-left: 20px;
    margin: 0;
  }

  li {
    list-style-type: disc;
    margin-bottom: 6px;
  }

  p {
    margin: 0 0 12px 0;
  }
`;

export default function PremiumServices() {
  const services = [
    {
      icon: "/icons/members.png",
      title: "Declaration for Parents/Family Members",
      desc: (
        <ul>
          <li>Declaration on our Legal Letterhead mentioning their name, age, medical ailment (if any), stating they are our clients, and they have not availed any Loan from the Banks. Hence, no visit or calls should be made to them demanding repayment.</li>
          <li>Escalation Notice to Managing Director of the Bank if recovery agents demand repayment from your family in your absence.</li>
          <li>Warning/Cease & Desist Notice not to harass family members in any manner.</li>
          <li>Escalation to RBI Ombudsman / National Consumer Authority if harassment continues.</li>
          <li>We provide a dedicated mobile number for family members to call; our legal team will intervene directly with the recovery agent.</li>
          <li>Draft Police complaint and assistance for filing in worst case situations.</li>
        </ul>
      ),
    },
    {
      icon: "/icons/RBI.png",
      title: "Intimation Notice & Replies to Demand Notices",
      desc: (
        <>
          <p>• Issue Intimation & Moratorium Notice to all lenders, placing on record that Client:</p>
          <ul>
            <li>is not a wilful defaulter</li>
            <li>has bonafide intentions</li>
            <li>is not denying obligation to repay</li>
            <li>is facing temporary financial hardships</li>
          </ul>
          <p>• Reply to all demand notices from lenders, whether by draft reply (email) or on lawyer letterhead through RPAD.</p>
          <p>• Resolve360 will issue replies to all notices until settlement is complete.</p>
        </>
      ),
    },
    {
      icon: "/icons/Forward.png",
      title: "Recovery Agent Home Visit – Anti-Harassment Service",
      desc: (
        <ul>
          <li>Draft Preferred Location Notice prohibiting home/office visits and restricting to agreed public location.</li>
          <li>If agents visit home despite notice: install CCTV, politely ask details, furnish all notices/replies, and forward recordings.</li>
          <li>Warning/Cease & Desist Notice issued to lenders if harassment persists.</li>
          <li>Escalation to RBI Ombudsman / National Consumer Authority if needed.</li>
          <li>Dedicated mobile number provided for real-time intervention during harassment.</li>
        </ul>
      ),
    },
    {
      icon: "/icons/agent.png",
      title: "Recovery Agent Calls – Anti-Harassment Service",
      desc: (
        <ul>
          <li>Client should obtain new number for daily use; old number stays active but on silent mode.</li>
          <li>Return ~2 calls daily, record harassing/abusive calls.</li>
          <li>Obtain caller’s name and bank details, forward recordings to Resolve360.</li>
          <li>Resolve360 issues violation notices and escalates if harassment persists.</li>
          <li>Alternately forward all unwanted calls to dedicated number provided by us & our team will take care of the same</li>
        </ul>
      ),
    },
    {
      icon: "/icons/mobnum.png",
      title: "Dedicated Mobile Number for Anti-Harassment",
      desc: (
        <p>We will provide a dedicated mobile number. Client’s family members can call this number in case of harassment, and our legal team will speak to the recovery agent directly.</p>
      ),
    },
    {
      icon: "/icons/arbitration.png",
      title: "Arbitration & Conciliation Proceedings",
      desc: (
        <p>We represent you in arbitration/conciliation proceedings initiated by lenders. Drafting replies, objections, written statements, rejoinders, appearances – end-to-end representation included.</p>
      ),
    },
    {
      icon: "/icons/HarassmentResolution.png",
      title: "Settlement Negotiation",
      desc: (
        <ul>
          <li>Assist Client in negotiating settlements when financially ready.</li>
          <li>Handle settlements one lender at a time.</li>
          <li>Client acknowledges settlements affect CIBIL score, which can be rebuilt post-settlement.</li>
          <li>Endeavour to secure up to 70% waiver.</li>
        </ul>
      ),
    },
  ];

  return (
    <Section>
      <Heading>
        Our Premium <span>Services</span>
      </Heading>
      <Subheading>Tailored to deliver relief and peace of mind</Subheading>

      <CardGrid>
        {services.map((item, idx) => (
          <ServiceCard
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Icon src={item.icon} alt={`Icon ${idx + 1}`} />
            <Divider />
            <ServiceTitle>{item.title}</ServiceTitle>
            <ServiceDesc>{item.desc}</ServiceDesc>
          </ServiceCard>
        ))}
      </CardGrid>
    </Section>
  );
}
