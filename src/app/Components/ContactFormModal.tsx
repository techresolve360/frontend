"use client";

import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi"; 
import { IoClose, IoChevronDown } from "react-icons/io5";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  Label,
  Input,
  Textarea,
  SubmitButton,
  HighlightNumber,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownHeader,
} from "../Styles/Modal.styles";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorText = {
  color: "#e63946",
  fontSize: "0.85rem",
  marginTop: "-8px",
  marginBottom: "10px",
  display: "block",
};

const languages = [
  "English",
  "Hindi",
  "Tamil",
  "Malayalam",
  "Telugu",
  "Kannada",
  "Bengali",
  "Gujrati",
  "Odia",
  "Marathi",
];

const ContactFormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [message, setMessage] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [callTime, setCallTime] = useState("");
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
        console.log({
          fullName,
          phone,
          loanAmount,
          message,
          preferredLanguage,
          callTime,
        });
        alert("Form submitted successfully!");
        setIsSubmitting(false);
        onClose();
      }, 1200);
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
          placeholder="Enter your name *"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <span style={ErrorText}>{errors.fullName}</span>}

        <Label>Phone Number</Label>
        <Input
          type="text"
          placeholder="10-digit mobile *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span style={ErrorText}>{errors.phone}</span>}

        <Label>Total Outstanding of Personal Loan/Credit Card</Label>
        <Input
          type="text"
          placeholder="Loan Amount *"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        {errors.loanAmount && <span style={ErrorText}>{errors.loanAmount}</span>}

        <Label>
          Message <span style={{ fontWeight: 400 }}>(Optional)</span>
        </Label>
        <Textarea
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Label>Preferred Language</Label>
        <Dropdown>
          <DropdownHeader onClick={() => setDropdownOpen(!dropdownOpen)}>
            {preferredLanguage || "Select Language"}
            <IoChevronDown size={18} />
          </DropdownHeader>
          {dropdownOpen && (
            <DropdownList>
              {languages.map((lang, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => {
                    setPreferredLanguage(lang);
                    setDropdownOpen(false);
                  }}
                >
                  {lang}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Dropdown>

        <Label>How soon you want us to call you</Label>
        <Input
          type="text"
          placeholder="e.g. Within 1 hour"
          value={callTime}
          onChange={(e) => setCallTime(e.target.value)}
        />

        <HighlightNumber>
          <FiPhoneCall size={16} />
          <span>Save our number: <strong>+91 70444 32779</strong></span>
        </HighlightNumber>


        <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </SubmitButton>
      </ModalContainer>
    </Overlay>
  );
};

export default ContactFormModal;
