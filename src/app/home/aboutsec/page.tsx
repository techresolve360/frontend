"use client";

import styled from "styled-components";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <AboutContainer>
      <TextContent>
        <h2>
          About <span>Resolve360</span>
        </h2>

        <Heading>Restoring Financial Freedom — The Right Way</Heading>

        <Paragraph>
          Resolve360 helps individuals regain control over their finances with
          lawful, transparent, and practical debt solutions. Our experts handle
          <b> loan settlements </b> and <b> recovery harassment issues </b>,
          ensuring clients are treated fairly while reducing debt stress.
        </Paragraph>

        <Paragraph>
          We follow a <b>client-first approach</b> — every negotiation is rooted
          in ethics, law, and your best financial outcome. Our goal is simple:
          to help you rebuild confidence and peace of mind.
        </Paragraph>

        <SubHeading>Our Promise</SubHeading>

        <Paragraph>
          Financial recovery should never come with fear. Resolve360 ensures
          that every process remains ethical, empowering you to move forward
          with clarity and confidence.
        </Paragraph>
      </TextContent>

      <ImageWrapper>
        <StyledImage
          src="/aboutsec.jpg"
          alt="About Resolve360"
          width={520}
          height={520}
        />
      </ImageWrapper>
      
    </AboutContainer>
  );
};

export default AboutSection;

// ---------------------- Styled Components ----------------------

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;
  background-color: #fff;
  padding: 120px 80px 60px 80px;
  gap: 80px;
  margin: auto;

  @media (max-width: 1200px) {
    padding: 120px 60px 60px 60px;
    gap: 60px;
  }

  @media (max-width: 992px) {
    padding: 100px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 100px 24px 60px 24px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 100px 16px 50px 16px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }

  h2 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 16px;
    color: #000;
    font-family: "poppins", sans-serif;
    line-height: 1.2;

    span {
      color: #0073d7;
    }

    @media (max-width: 992px) {
      font-size: 34px;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
`;

const Heading = styled.h3`
  font-size: 26px;
  font-weight: 600;
  color: #121212;
  margin-bottom: 20px;
  font-family: "poppins", sans-serif;
  line-height: 1.4;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubHeading = styled.h4`
  font-size: 22px;
  font-weight: 700;
  color: #000;
  margin: 14px 0;
  font-family: "poppins", sans-serif;

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 19px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.p`
  font-size: 19px;
  line-height: 1.8;
  font-family: "poppins", sans-serif;
  color: #111827;
  margin-bottom: 18px;

  b {
    font-weight: 700;
    color: #000;
  }

  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 520px;
  height: 520px;
  border-radius: 18px;
  box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.18);
  object-fit: cover;

  @media (max-width: 992px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;
