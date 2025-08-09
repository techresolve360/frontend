"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "../Styles/Modal.styles";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorText = {
  color: "#b22222",
  fontSize: "0.95rem",
  marginTop: "4px",
  display: "block",
};

const ContactFormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!loanAmount.trim()) {
      newErrors.loanAmount = "Loan amount is required";
    } else if (isNaN(Number(loanAmount))) {
      newErrors.loanAmount = "Loan amount must be a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log({ fullName, phone, loanAmount, message });
        alert("Form submitted successfully!");
        setIsSubmitting(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>

        <Title>Get In Touch</Title>

        <Label>Full Name</Label>
        <Input
          type="text"
          placeholder="Your full name *"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <span style={ErrorText}>{errors.fullName}</span>}

        <Label>Phone Number</Label>
        <Input
          type="text"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span style={ErrorText}>{errors.phone}</span>}

        <Label>Total Outstanding of Personal Loan/Credit Card</Label>
        <Input
          type="text"
          placeholder="Total Loan Amount *"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        {errors.loanAmount && <span style={ErrorText}>{errors.loanAmount}</span>}

        <Label>Message</Label>
        <Textarea
          rows={4}
          placeholder="Write a message! (Optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </SubmitButton>
      </ModalContainer>
    </Overlay>
  );
};

export default ContactFormModal;
