"use client";

import React from "react";
import styled from "styled-components";
import FAQ from "./faq/page";
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
    padding: 120px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 120px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 120px 16px;
    gap: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 650px;
  text-align: left;
  font-family: 'Poppins', sans-serif;

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
    h3 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
    color: #111827;
    line-height: 1.4;                                
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
          Knowledge <span>Centre</span>
        </h2>
        <h3>
          Your Rights as a Borrower: Dealing with Harassment from Recovery Agents
        </h3>
        <p>
          Understand Your Legal Rights and How to Halt Unethical Practices Struggling to repay a loan is challenging enough without the added...
        </p>
      </TextContent>

      <ImageContainer>
        <img src="/Centre.png" alt="Services" />
      </ImageContainer>
    </ServicesSection>

   {/* //Sections */}
        <FAQ />
        <Consultation />

    </>
  );
};

export default Services;
