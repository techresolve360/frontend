"use client";

import React, { useState } from "react";
import ContactFormModal from "../Components/ContactFormModal";

export default function ContactModalPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ContactFormModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
}
