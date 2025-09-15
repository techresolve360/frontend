"use client";

import { desc } from "framer-motion/client";
import React from "react";
import styled from "styled-components";

// ---------- Styled Components ----------
const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;
  padding: 30px 70px;
  gap: 20px; 
  background-color: #fff;
  margin: auto;

  @media (max-width: 1200px) {
    padding: 20px 50px;
    gap: 55px;
  }
  @media (max-width: 992px) {
    padding: 15px 40px;
    gap: 50px;
  }
  @media (max-width: 768px) {
    padding: 12px 20px;
    gap: 45px;
  }
  @media (max-width: 480px) {
    padding: 0px 16px 40px 16px;
    gap: 20px;
  }
`;

const TextContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 20px;
    color: #000;
    font-family: 'poppins', sans-serif;
    line-height: 1.2;

    span {
      color: #0073d7;
    }

    @media (max-width: 992px) { font-size: 36px; }
    @media (max-width: 768px) { font-size: 32px; }
    @media (max-width: 480px) { font-size: 28px; }
  }

  p {
    font-size: 20px;
    line-height: 1.8;
    font-family: 'poppins', sans-serif;
    color: #111827;
    margin-bottom: 14px;

    strong {
      font-weight: 700;
      color: #000;
    }

    @media (max-width: 992px) { font-size: 19px; }
    @media (max-width: 768px) { font-size: 18px; }
    @media (max-width: 480px) { font-size: 16px; }
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  overflow: hidden;
  text-align: start;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const CardImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
`;

const CardName = styled.h3`
  font-family: 'poppins', sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding: 16px 0 0px 16px;
  color: #111827;
`;

const CardDescriptions = styled.p`
  font-family: 'poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: start;
  color: #0084C7;
  padding: 0 16px;
  margin-bottom: 10px;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  font-family: 'poppins', sans-serif;
  font-weight: 200;
  font-size: 16px;
  text-align: start;
  color: #444;
  padding: 0 16px;
  line-height: 1.4;
`;

// ---------- Component ----------
const Services = () => {
  return (
    <>
      {/* Core Team */}
      <ServicesSection>
        <TextContent>
          <h2>
            Core Team: <span>Expertise You Can Trust</span>
          </h2>
          <p>
            Resolve360 is led by a dynamic team of <strong> professionals</strong>, bringing over 20 years of experience in building innovative businesses and creating impactful solutions.
          </p>
          <p>
            Our founder, <strong>Mr. Vipin Choudhary</strong>, adds over <strong>20 years of legal expertise</strong> to the team. His deep understanding of debt resolution laws and unwavering commitment to client rights form the backbone of our services.
          </p>
          <p>
            Together, we combine modern innovation with proven legal mastery to guide you toward financial freedom.
          </p>
        </TextContent>

        <CardsGrid>
          {[
            {
              img: "/vipin.jpg",
              name: "Adv. Vipin Choudhary",
              desc: "Founder",
            },
            {
              img: "/vikas.jpeg",
              name: "Vikas Katoch",
              desc: "Founder",
            },
            {
              img: "/shruti.jpeg",
              name: "Shruti",
              desc: "General Counsel"
            },
            { 
                img: "/mohith.jpeg", 
                name: "Mohith N", 
                desc: "Operations Head" 
            },
            { 
                img: "/Dennis.jpeg", 
                name: "Dennis", 
                desc: "Senior Inside Sales Manager" 
            }
          ].map((member, i) => (
            <Card key={i}>
              <CardImage src={member.img} alt={member.name} />
              <CardName>{member.name}</CardName>
              <CardDescriptions>{member.desc}</CardDescriptions>
            </Card>
          ))}
        </CardsGrid>
      </ServicesSection>

      {/* Settlement Team */}
      <ServicesSection>
        <TextContent>
          <h2>
            Settlement <span>Team</span>
          </h2>
        </TextContent>

        <CardsGrid>
          {[
            { 
                img: "/sakshi.png", 
                name: "Sakshi Rai", 
                desc: "Gurugram, Haryana",
                lang: " Hindi, English" 
            },
            { 
                img: "/savan.png", 
                name: "Savan Chauhan", 
                desc: "Ahmedabad/Gandhinagar Gujarat",
                lang: " Hindi, English, Gujarati"
            },
            { 
                img: "/pritam.jpeg", 
                name: "Pritam Patel",
                desc: "Surat, Gujarat" ,
                lang: " Hindi, English, Gujarati"
            },
            { 
                img: "/pinky.jpeg", 
                name: "Pinky Singh", 
                desc: "Hyderabad / Telangana",
                lang: " Hindi, English, Telugu"
            },
            { 
                img: "/santosh.jpeg", 
                name: "Santosh Balekundri", 
                desc: "Belagavi, Karnataka",
                lang: " Kannada, Hindi, English, Marathi"
            },    
            {
                img: "/jayesh.jpeg",
                name: "Jayesh Parmar",
                desc: "Vadodara, Gujarat",
                lang: " Hindi, English, Gujarati"
            },
            { 
                img: "/sanjay.jpeg", 
                name: "Sanjay Sharma", 
                desc: "BHOPAL, Madhya Pradesh",
                lang: " Hindi, English"
            },
            { 
                img: "/shravani.jpeg", 
                name: "Shravani Ram", 
                desc: "Kolar Karnataka",
                lang: " Kannada, Telugu, English"
            },
            {
                img: "/saniya.jpeg",
                name: "Shaik saniya Firdouse",
                desc: "Hyderabad, Telangana",
                lang: " Hindi, English, Telugu"
            },
            { 
                img: "/kiran.jpeg", 
                name: "Kiran Naidu", 
                desc: "Hyderabad, Telangana",
                lang: " Telugu, Hindi, English"
            },    
            {
                img: "/priyadharshini.jpeg",
                name: "Priyadharshini Subramanian",
                desc: "Bangalore, Karnataka",
                lang: " Tamil, English, Hindi"
            },
            { 
                img: "/jitesh.jpeg",
                name: "Jitesh Kotiya",
                desc: "Pune, Maharastra",
                lang: " Gujarati Hindi and English"
            }

          ].map((member, i) => (
            <Card key={i}>
              <CardImage src={member.img} alt={member.name} />
              <CardName>{member.name}</CardName>
              <CardDescriptions>{member.desc}</CardDescriptions>
              <CardDescription>{member.lang}</CardDescription>
            </Card>
          ))}
        </CardsGrid>
      </ServicesSection>
    </>
  );
};

export default Services;
