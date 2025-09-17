"use client";

import React, { useState, useEffect } from "react";
import ContactFormModal from "../Components/ContactFormModal"; 

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Always open the modal directly when page loads
    setIsModalOpen(true);

    // OR: If you only want when #contact is in URL, use this:
    // if (window.location.hash === "#contact") {
    //   setIsModalOpen(true);
    // }
  }, []);

  return (
    <div>
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Page;
