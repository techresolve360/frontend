"use client";

import React from "react";
import styled from "styled-components";
import Team from "./Core Team/page";
import WhyStandout from "../home/WhyStandout/page";
import TailoredService from "./Tailored Services/page";
import Consultation from "../home/consultation/page";

const ServicesSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;
  padding: 120px 70px 10px 70px;
  gap: 60px;
  background-color: #fff;
  margin: auto;

  @media (max-width: 1200px) {
    padding: 120px 50px 10px 50px;
    gap: 50px;
  }

  @media (max-width: 992px) {
    padding: 120px 40px 40px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 120px 20px 40px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 120px 16px 40px 16px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 24px;
    color: #000;
    font-family: "poppins", sans-serif;
    line-height: 1.2;

    span {
      color: #0073d7;
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
  }

  p {
    font-size: 20px;
    line-height: 1.8;
    font-family: "poppins", sans-serif;
    color: #111827;
    margin-bottom: 24px;

    b {
      font-weight: 700;
      color: #000;
    }

    @media (max-width: 992px) {
      font-size: 19px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const ImageRight = styled.img`
  flex: 1;
  width: 400px;   /* fixed width */
  height: 400px;  /* fixed height to make it square */
  border-radius: 16px;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.15);
  object-fit: cover; /* crop while covering */

  @media (max-width: 992px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;   /* allow responsive on small screens */
    aspect-ratio: 1/1; /* keep it square */
  }
`;

const Services = () => {
  return (
    <>
      <ServicesSection>
        {/* Text on the left */}
        <TextContent>
          <h2>
            Our Mission: <span>Empowering Financial Freedom</span>
          </h2>
          <p>
            At Resolve360, our mission is to help individuals overcome financial
            challenges and reclaim their peace of mind. Using AI-powered
            insights and expert legal guidance, we provide tailored solutions
            for loan settlements and recovery agent harassment.
          </p>
          <p>
            We believe in a client-first approach, offering support, empathy,
            and the expertise needed to guide you toward financial freedom.
          </p>
        </TextContent>

        {/* Image on the right */}
        <ImageRight src="/mission.png" alt="Mission" />
      </ServicesSection>

      <Team />
      <WhyStandout />
      <TailoredService />
      <Consultation />
    </>
  );
};

export default Services;
