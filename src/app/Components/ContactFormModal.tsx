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
  isOpen?: boolean;
  onClose?: () => void;
  mode?: "modal" | "page";
}

const ErrorText = {
  color: "#e63946",
  fontSize: "0.85rem",
  marginTop: "-8px",
  marginBottom: "10px",
  display: "block",
};

const cities = [
  "Haryana",
  "Delhi-NCR", 
  "Maharashtra",
  "Telangana", 
  "Andhra Pradesh",
  "Karnataka",
  "Chennai",
  "Other"];

// const callTimes = [
//   "Immediately",
//   "Within 6 hours",
//   "Today (by end of day)",
//   "Tomorrow",
//   "2–3 days",
//   "Within 1 week",
//   "Within 2 weeks",
//   "Flexible / Not decided yet",
// ];

const outstandingRanges = [
  "0–10 Lakh",
  "10–20 Lakh",
  "20-30 Lakh",
  "30-40 Lakh",
  "40-50 Lakh",
  "50 Lakh +",
];

const ContactFormModal: React.FC<ModalProps> = ({ isOpen = true, onClose, mode = "modal" }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDropdownOpen, setLoanDropdownOpen] = useState(false);

  const [city, setCity] = useState("");
  const [customCity, setCustomCity] = useState("");
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  // const [callTime, setCallTime] = useState("");
  // const [callTimeDropdownOpen, setCallTimeDropdownOpen] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  if (mode === "modal" && !isOpen) return null;

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";

    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone number must be 10 digits";

    if (!loanAmount.trim()) newErrors.loanAmount = "Please select your outstanding amount";

    if (!city.trim()) newErrors.city = "City selection is required";
    if (city === "Other" && !customCity.trim())
      newErrors.customCity = "Please enter your city name";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const API_URL = "https://api.resolve360.in";

  const handleSubmit = async () => {
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const finalCity = city === "Other" ? customCity : city;

      // const payload = {
      //   fullName,
      //   phone,
      //   loanAmount,
      //   city: finalCity,
      //   callTime,
      // };
      const payload = {
                fullName,
                phone,
                loanAmount,
                city,
                otherCity: city === "Other" ? customCity : "",
              };


      const res = await axios.post(`${API_URL}/submit-form`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_submit", {
            page_path: window.location.pathname,
            page_title: document.title,
          });
        }

        setFullName("");
        setPhone("");
        setLoanAmount("");
        setCity("");
        setCustomCity("");
        // setCallTime("");

        setShowThankYou(true);
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

      {/* ---------- Loan Amount Dropdown ---------- */}
      <Label>Total Outstanding of Personal Loan/Credit Card</Label>
      <Dropdown>
        <DropdownHeader onClick={() => setLoanDropdownOpen(!loanDropdownOpen)}>
          {loanAmount || "Select Outstanding Range"}
          <IoChevronDown size={18} />
        </DropdownHeader>
        {loanDropdownOpen && (
          <DropdownList>
            {outstandingRanges.map((range, idx) => (
              <DropdownItem
                key={idx}
                onClick={() => {
                  setLoanAmount(range);
                  setLoanDropdownOpen(false);
                }}
              >
                {range}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </Dropdown>
      {errors.loanAmount && <span style={ErrorText}>{errors.loanAmount}</span>}

      {/* ---------- City Selection ---------- */}
      <Label>Which city you are based out of?</Label>
      <Dropdown>
        <DropdownHeader onClick={() => setCityDropdownOpen(!cityDropdownOpen)}>
          {city || "Select City"}
          <IoChevronDown size={18} />
        </DropdownHeader>
        {cityDropdownOpen && (
          <DropdownList>
            {cities.map((c, idx) => (
              <DropdownItem
                key={idx}
                onClick={() => {
                  setCity(c);
                  setCityDropdownOpen(false);
                }}
              >
                {c}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </Dropdown>
      {errors.city && <span style={ErrorText}>{errors.city}</span>}

      {city === "Other" && (
        <>
          <Label>Enter your city</Label>
          <Input
            type="text"
            placeholder="Your city name"
            value={customCity}
            onChange={(e) => setCustomCity(e.target.value)}
          />
          {errors.customCity && <span style={ErrorText}>{errors.customCity}</span>}
        </>
      )}

      {/* ---------- Call Time Selection ----------
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
      </Dropdown> */}

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
          Save our number <br />
          <strong>+91 99004 75500</strong>
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

      {showThankYou && (
        <Overlay>
          <ModalContainer style={{ textAlign: "center", padding: "2rem" }}>
            <h2 style={{ fontWeight: "700", marginBottom: "1rem" }}>🎉 Thank You!</h2>
            <p>Your form has been submitted successfully. Our team will contact you soon.</p>
            <SubmitButton
              style={{ marginTop: "1.5rem" }}
              onClick={() => {
                setShowThankYou(false);
                onClose?.();
              }}
            >
              Close
            </SubmitButton>
          </ModalContainer>
        </Overlay>
      )}
    </Overlay>
  ) : (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <ModalContainer>{FormContent}</ModalContainer>
      {showThankYou && (
        <Overlay>
          <ModalContainer style={{ textAlign: "center", padding: "2rem" }}>
            <h2 style={{ fontWeight: "700", marginBottom: "1rem" }}>🎉 Thank You!</h2>
            <p>Your form has been submitted successfully. Our team will contact you soon.</p>
            <SubmitButton
              style={{ marginTop: "1.5rem" }}
              onClick={() => {
                setShowThankYou(false);
                onClose?.();
              }}
            >
              Close
            </SubmitButton>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
};

export default ContactFormModal;
