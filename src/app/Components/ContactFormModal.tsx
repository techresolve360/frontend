"use client";

import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import axios from "axios";

import { IoClose, IoChevronDown } from "react-icons/io5";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  Label,
  Input,
  SubmitButton,
  HighlightNumber,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownHeader,
} from "../Styles/Modal.styles";

export interface ModalProps {
  isOpen?: boolean; // optional for page mode
  onClose?: () => void;
  mode?: "modal" | "page"; // NEW
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

const callTimes = [
  "Immediately",
  "Within 6 hours",
  "Today (by end of day)",
  "Tomorrow",
  "2–3 days",
  "Within 1 week",
  "Within 2 weeks",
  "Flexible / Not decided yet",
];

const ContactFormModal: React.FC<ModalProps> = ({ isOpen = true, onClose, mode = "modal" }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [callTime, setCallTime] = useState("");
  const [callTimeDropdownOpen, setCallTimeDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (mode === "modal" && !isOpen) return null;

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";

    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone number must be 10 digits";

    if (!loanAmount.trim()) newErrors.loanAmount = "Loan amount is required";
    else if (isNaN(Number(loanAmount))) newErrors.loanAmount = "Loan amount must be a number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = () => {
  //   if (validate()) {
  //     setIsSubmitting(true);
  //     setTimeout(() => {
  //       console.log({
  //         fullName,
  //         phone,
  //         loanAmount,
  //         preferredLanguage,
  //         callTime,
  //       });
  //       alert("Form submitted successfully!");
  //       setIsSubmitting(false);
  //       onClose?.();
  //     }, 1200);
  //   }
  // };
  const API_URL = "https://api.resolve360.in";
  const handleSubmit = async () => {
  if (!validate()) return;

  setIsSubmitting(true);

  try {
    const payload = {
      fullName,
      phone,
      loanAmount,
      preferredLanguage,
      callTime,
    };

    const res = await axios.post(`${API_URL}/submit-form`, payload, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) {
      // Clear form (optional)
      setFullName("");
      setPhone("");
      setLoanAmount("");
      setPreferredLanguage("");
      setCallTime("");

      alert("Form submitted successfully!");
      onClose?.();
    } else {
      console.error("Submit error:", res.data);
      alert(`Submit failed: ${res.data.message || "Server error"}`);
    }
  } catch (err: any) {
    console.error("Network error:", err);
    alert("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  const FormContent = (
    <>
      {mode === "modal" && (
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>
      )}

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

      <Label>Preferred Language</Label>
      <Dropdown>
        <DropdownHeader onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
          {preferredLanguage || "Select Language"}
          <IoChevronDown size={18} />
        </DropdownHeader>
        {languageDropdownOpen && (
          <DropdownList>
            {languages.map((lang, idx) => (
              <DropdownItem
                key={idx}
                onClick={() => {
                  setPreferredLanguage(lang);
                  setLanguageDropdownOpen(false);
                }}
              >
                {lang}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </Dropdown>

      <Label>When do you want us to connect</Label>
      <Dropdown>
        <DropdownHeader onClick={() => setCallTimeDropdownOpen(!callTimeDropdownOpen)}>
          {callTime || "Select Call Time"}
          <IoChevronDown size={18} />
        </DropdownHeader>
        {callTimeDropdownOpen && (
          <DropdownList>
            {callTimes.map((time, idx) => (
              <DropdownItem
                key={idx}
                onClick={() => {
                  setCallTime(time);
                  setCallTimeDropdownOpen(false);
                }}
              >
                {time}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </Dropdown>

      <Label
        style={{
          color: "red",
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "-6px",
        }}
      >
        So you don't miss our call !!
      </Label>
      <HighlightNumber>
        <FiPhoneCall size={16} />
        <span>
          Save our number <br/><strong>+91 99004 75500</strong>
        </span>
      </HighlightNumber>

      <SubmitButton onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </SubmitButton>
    </>
  );

  return mode === "modal" ? (
    <Overlay id="contact">
      <ModalContainer>{FormContent}</ModalContainer>
    </Overlay>
  ) : (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <ModalContainer>{FormContent}</ModalContainer>
    </div>
  );
};

export default ContactFormModal;
