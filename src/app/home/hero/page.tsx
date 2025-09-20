"use client";

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import Modal from "../../Components/ContactFormModal";

// Styled Components
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 7rem 70px 4rem; /* top padding ensures title doesn't overlap navbar */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media (max-width: 1280px) {
    padding: 6rem 50px 3rem;
  }

  @media (max-width: 1024px) {
    padding: 5rem 40px 3rem;
    flex-direction: column;
    justify-content: center;
    min-height: auto;
  }

  @media (max-width: 768px) {
    padding: 5.5rem 20px 3rem;
  }

  @media (max-width: 480px) {
    padding: 5rem 16px 2.5rem;
  }
`;

const BackgroundImage = styled.div<{ activeIndex: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  img:nth-child(1) {
    opacity: ${({ activeIndex }) => (activeIndex === 0 ? 1 : 0)};
  }

  img:nth-child(2) {
    opacity: ${({ activeIndex }) => (activeIndex === 1 ? 1 : 0)};
  }
`;

const Content = styled.div`
  position: relative;
  margin: 4rem 0;
  max-width: 950px;
  width: 100%;
  text-align: left;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;

  @media (max-width: 1024px) {
    margin: 2rem 0;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 0 10px; 
  }

  @media (max-width: 480px) {
    padding: 0 6px;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.3rem, 4.5vw, 2.5rem);
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff;
  line-height: 1.4;
  word-break: break-word;

  @media (max-width: 768px) {
    text-align: left;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; 
  }
`;

const Subtitle = styled.p`
  margin-top: 15px;
  font-size: clamp(0.85rem, 2.5vw, 1.1rem);
  font-family: "Lato", sans-serif;
  color: #dcdcdc;
  line-height: 1.5;
  word-break: break-word; 

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;


const ButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const CTAButton = styled(motion.button)`
  padding: 12px 28px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
`;

const FeaturesContainer = styled.div`
  margin: 3rem 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 768px) {
    margin: 2rem 0;
    justify-items: start; /* left align items */
  }
`;

const Feature = styled.div`
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  background: transparent;
  border-right: 2px solid rgba(255, 255, 255, 0.3);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    text-align: left;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const SlideWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 200%;
`;

const CarouselSlide = styled.div<{ centerContent?: boolean }>`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: ${({ centerContent }) =>
    centerContent ? "center" : "flex-start"};
  align-items: flex-start;
  padding-top: ${({ centerContent }) => (centerContent ? "0" : "4rem")};

  @media (max-width: 768px) {
    padding-top: ${({ centerContent }) => (centerContent ? "0" : "6rem")};
    justify-content: ${({ centerContent }) =>
      centerContent ? "center" : "flex-start"};
    min-height: ${({ centerContent }) => (centerContent ? "70vh" : "auto")};
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 30px;
  }
`;

const Dot = styled(motion.div)<{ active: boolean }>`
  width: ${({ active }) => (active ? "14px" : "10px")};
  height: ${({ active }) => (active ? "14px" : "10px")};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#007bff" : "#888")};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const HomeSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwipe = (direction: number) => {
    setCarouselIndex((prev) => (prev + direction + 2) % 2);
  };

  const handleDotClick = (index: number) => {
    setCarouselIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" ref={sectionRef}>
      <BackgroundImage activeIndex={carouselIndex}>
        <img src="/BG1.png" alt="Slide 1 Background" />
        <img src="/BG_2.png" alt="Slide 2 Background" />
      </BackgroundImage>

      <CarouselContainer>
        <SlideWrapper
          animate={{ x: `-${carouselIndex * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -80) handleSwipe(1);
            else if (info.offset.x > 80) handleSwipe(-1);
          }}
        >
          {/* Slide 1 */}
          <CarouselSlide>
            <Content
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Title>
                India’s Most Trusted Services for Loan Settlement & Anti-Harassment
              </Title>
              <Subtitle>
                Stop harassment, settle loans, and achieve peace of mind
              </Subtitle>
              <ButtonContainer>
                <CTAButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Free Consultation
                </CTAButton>
              </ButtonContainer>
            </Content>

            {/* Features Section */}
            <FeaturesContainer>
              <Feature>Anti Harassment Services</Feature>
              <Feature>Reduce Your Debt by Up to 70%</Feature>
              <Feature>Integrated Legal Services</Feature>
              <Feature>Tailored Solutions for Your Needs</Feature>
            </FeaturesContainer>
          </CarouselSlide>

          {/* Slide 2 - Centered */}
          <CarouselSlide centerContent>
            <Content>
              <Title>QUANTIVA FINANCIAL CONSULTANCY PRIVATE LIMITED</Title>
              <Subtitle>CIN: U66190KA2025PTC205922</Subtitle>
              <Subtitle>GSTIN: 29ABCDE1234F1Z5</Subtitle>
              <Subtitle> <strong>Bangalore Office:</strong> 994/79, 27th A main road, Jayanagar 9th block, Bangalore - 560041</Subtitle>
              <Subtitle> <strong>Gurgaon Office:</strong>  c/o 91 Springboard,  Level 2, Augusta Point, Golf Course Road, Sector 53, Gurugram , Haryana - 122002</Subtitle>
            </Content>
          </CarouselSlide>
        </SlideWrapper>
      </CarouselContainer>

      {/* Dots */}
      <DotsContainer>
        {[0, 1].map((index) => (
          <Dot
            key={index}
            active={carouselIndex === index}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </DotsContainer>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};

export default HomeSection;
