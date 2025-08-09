"use client";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import Modal from "../../Components/ContactFormModal";

const ConsultationSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;
  padding: 50px 70px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column; /* stack vertically on mobile */
  }
`;

const MapContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px 0;
    order: 1; /* image first on mobile */
  }
`;

const MapImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const Divider = styled.div`
  width: 1px;
  background-color: #d1d5db;

  @media (max-width: 768px) {
    display: none; /* hide divider on mobile */
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  align-items: flex-start;
  padding: 0 40px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 20px 10px;
    align-items: flex-start;
    text-align: start;
    order: 2; /* text after image */
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  font-family: "Poppins", sans-serif;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #111827;
  font-family: "Poppins", sans-serif;
  margin-bottom: 24px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const BookButton = styled.button`
  background-color: #007bff;
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005fcc;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 24px;
  }
`;

const Consultation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-150px" });

  return (
    <>
      <ConsultationSection>
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96], // custom cubic bezier for smooth easing
            scale: { type: "spring", stiffness: 120, damping: 15 },
          }}
          style={{ width: "100%", willChange: "transform, opacity" }}
        >
          <Container>
            <MapContainer>
              <MapImage src="/india 1.png" alt="India Map" />
            </MapContainer>

            <Divider />

            <TextContainer>
              <Title>Free Online Consultation.</Title>
              <Subtitle>
                Book Date and Time That Works For You With Advocate Vipin Choudhary
              </Subtitle>
              <BookButton onClick={() => setIsModalOpen(true)}>Book Now</BookButton>
            </TextContainer>
          </Container>
        </motion.div>
      </ConsultationSection>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Consultation;
