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
    padding: 2.5rem 50px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 8rem 20px;
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

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  max-width: 950px;
  width: 100%;
  text-align: left;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: break-word;
  overflow-wrap: break-word;

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
  max-width: 100%;
  word-break: break-word;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  margin-top: 15px;
  font-size: 1.2rem;
  font-family: "Lato", sans-serif;
  color: #dcdcdc;
  max-width: 100%;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const USP = styled.p`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.4;
  max-width: 100%;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 15px;
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
  padding-right: 50px;
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
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

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
        <img src="/BG2.png" alt="Slide 2 Background" />
      </BackgroundImage>

      <Overlay />

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
              <Title>India Most Trusted Services for Loan Settlement & Anti-Harassment</Title>
              <Subtitle>
                Stop harassment, settle loans, and achieve peace of mind
              </Subtitle>
              <ButtonContainer>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)} // open modal
                  style={{
                    padding: "12px 24px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Book Free Consultation
                </motion.button>
              </ButtonContainer>
            </Content>
          </CarouselSlide>

          {/* Slide 2 */}
          <CarouselSlide>
            <Content>
              <Title>FQUANTIVA FINANCIAL CONSULTANCY PRIVATE LIMITED</Title>
              <Subtitle>CIN: U66190KA2025PTC205922</Subtitle>
              <Subtitle>GSTIN: 29ABCDE1234F1Z5</Subtitle>
              <USP>
                Om Chambers, 648/A, 4th, Floor, Binnamangala, Indiranagar (Bangalore), Bangalore North, Bangalore- 560038
              </USP>
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