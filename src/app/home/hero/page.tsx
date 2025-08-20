"use client";

import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import Modal from "../../Components/ContactFormModal";

// Styled Components
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh;
  padding: 3rem 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 2.5rem 40px;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 6rem 20px;
    min-height: auto;
  }
`;

const BackgroundImage = styled.div<{ activeIndex: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
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
  margin: 7rem 0;
  max-width: 950px;
  width: 100%;
  text-align: left;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #fff;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  margin-top: 15px;
  font-size: 1.2rem;
  font-family: "Lato", sans-serif;
  color: #dcdcdc;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
`;

const CTAButton = styled(motion.button)`
  padding: 12px 28px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const FeaturesContainer = styled.div`
  margin: 5rem 0;
  width: 100%;
  max-width: auto; /* ✅ container width limit (optional) */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
`;

const Feature = styled.div`
  padding: 1.5rem 1rem;
  font-size: 1.7rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  background: transparent;
  position: relative;

  /* Divider line between items */
  border-right: 2px solid rgba(255, 255, 255, 0.3);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 0;
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

const CarouselSlide = styled.div`
  width: 100%;
  flex-shrink: 0;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
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
                India Most Trusted Services for Loan Settlement & Anti-Harassment
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
                <Feature>Reduce Your Debt by Up to 60%</Feature>
                <Feature>Legal Support</Feature>
                <Feature>Tailored Solutions for Your Needs</Feature>
              </FeaturesContainer>
          </CarouselSlide>

          {/* Slide 2 */}
          <CarouselSlide>
            <Content>
              <Title>FQUANTIVA FINANCIAL CONSULTANCY PRIVATE LIMITED</Title>
              <Subtitle>CIN: U66190KA2025PTC205922</Subtitle>
              <Subtitle>GSTIN: 29ABCDE1234F1Z5</Subtitle>
              <Subtitle>
                Om Chambers, 648/A, 4th Floor, Binnamangala, Indiranagar,
                Bangalore North, Bangalore- 560038
              </Subtitle>
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
