"use client";

import React from "react";
import ContactForm from "../Components/ContactFormModal";
import styled from "styled-components";
import { motion } from "framer-motion";

// Outer wrapper
const PageWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 5rem;
  padding: 8rem 5rem;
  background: #f9fbff;
  min-height: 100vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
    padding: 4rem 2rem;
  }
`;

// Left section
// Left section
const LeftSection = styled(motion.div)`
  flex: 1;
  max-width: auto;
  position: sticky;
  top: 10rem;
  align-self: flex-start;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    color: #121212;

    span {
      color: #0073D7;
    }
  }

  p {
    font-size: 1.05rem;
    color: #444;
    line-height: 1.8;
  }
`;

// Right section wrapper (controls form styling on this page)
const StyledFormWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: end; 

  .form-card {
    width: 100%;
    max-width: 490px; 
    background: #fff;
    border-radius: 18px;
  }
`;

const ContactPage = () => {
  return (
    <PageWrapper>
      {/* Left Section */}
      <LeftSection
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Contact <span>Resolve360</span>
        </h2>
        <p>
          Resolve360 is committed to providing <b>ethical</b>, 
          <b> transparent</b>, and <b>reliable</b> debt resolution 
          services. Whether you have questions, need support, 
          or want to explore our solutions, we’re here to help 
          at every step.
        </p>
      </LeftSection>

      {/* Right Section (Styled Form) */}
      <StyledFormWrapper
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="form-card">
          <ContactForm mode="page" />
        </div>
      </StyledFormWrapper>
    </PageWrapper>
  );
};

export default ContactPage;
