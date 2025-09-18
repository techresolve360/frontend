"use client";

import React from "react";
import ContactForm from "../Components/ContactFormModal";
import styled from "styled-components";
import { motion } from "framer-motion";

// Outer wrapper
const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between; 
  gap: 5rem;
  padding: 8rem 5rem;
  background: #f9fbff;
  min-height: 100vh;

  @media (max-width: 1200px) {
    gap: 3rem;
    padding: 8rem 3rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
    padding: 8rem 2rem;
    align-items: center;
    justify-content: center; /* center layout on smaller screens */
  }

  @media (max-width: 600px) {
    padding: 8rem 0 0 0;
    gap: 2rem;
  }
`;

// Left section
const LeftSection = styled(motion.div)`
  flex: 1;
  position: sticky;
  top: 8rem;
  padding: 0 1rem 0 1rem;
  align-self: flex-start;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    color: #121212;

    span {
      color: #0073d7;
    }
  }

  p {
    font-size: 1.05rem;
    color: #444;
    line-height: 1.8;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 1000px) {
    position: relative;
    top: unset;
    text-align: start;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
`;

// Right section wrapper
const StyledFormWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end; 

  .form-card {
    width: 100%;
    max-width: 500px;
    border-radius: 18px;

    .modal-container {
      max-width: 100% !important;
      width: 100% !important;
      padding: 0;
    }

    input,
    textarea,
    select {
      width: 100% !important;
      box-sizing: border-box;
    }

    .dropdown-list,
    .highlight-number,
    .submit-button {
      width: 100% !important;
      box-sizing: border-box;
    }
  }

  @media (max-width: 1200px) {
    .form-card {
     max-width: 100%
    }
  }

  @media (max-width: 1000px) {
    justify-content: center;
    .form-card {
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    .form-card {
      border-radius: 14px;
    }
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
          Resolve360 is committed to providing <b>ethical</b>, <b>transparent</b>, 
          and <b>reliable</b> debt resolution services. Whether you have questions, 
          need support, or want to explore our solutions, we’re here to help at every step.
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
