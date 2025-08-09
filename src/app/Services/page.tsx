"use client";

import React from "react";
import styled from "styled-components";
import FreeService from "./Free Services/page";
import PremiumService from "./PremiumServices/page";
import HowWeHelp from '../home/HowWeHelp/Page';
import Consultation from "../home/consultation/page";

const ServicesSection = styled.section`
  display: flex;
  align-items: center;
    background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;
  justify-content: space-between;
  padding: 120px 70px 30px 70px; 
  gap: 60px;
  background-color: #fff;
  margin: auto; /* Centers content on wide screens */

  @media (max-width: 1200px) {
    padding: 120px 50px;
    gap: 50px;
  }

  @media (max-width: 992px) {
    padding: 120px 40px 30px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 120px 20px 20px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 120px 16px 10px 16px;
    gap: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 650px;
  text-align: left;

  h2 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 24px;
    color: #000;
    line-height: 1.2;

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
  }

  p {
    font-size: 20px;
    line-height: 1.8;
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

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 550px;
    border-radius: 16px;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.15);
    object-fit: cover;

    @media (max-width: 1200px) {
      max-width: 500px;
    }

    @media (max-width: 992px) {
      max-width: 450px;
    }

    @media (max-width: 768px) {
      max-width: 400px;
    }

    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

const Services = () => {
  return (
    <>
    <ServicesSection>
      <TextContent>
        <h2>
          Our <span>Services</span>
        </h2>
        <p>
          We understand that financial hardships can be overwhelming,
          especially when recovery agents are adding to the stress.{" "}
          <b>You’re not alone, and you’re not at fault.</b>
        </p>
        <p>
          Our services are designed to <b>protect, guide, and empower</b> you to
          regain control of your financial future.
        </p>
        <p>Explore our offerings below.</p>
      </TextContent>

      <ImageContainer>
        <img src="/services-image.png" alt="Services" />
      </ImageContainer>
    </ServicesSection>

   {/* //Sections */}
    <FreeService />
    <PremiumService />
    <HowWeHelp />
    <Consultation />
    </>
  );
};

export default Services;
