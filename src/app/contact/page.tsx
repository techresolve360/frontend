"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import ContactFormModal from "../Components/ContactFormModal"; 

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
   
    setIsModalOpen(true);
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
    router.push("/"); 
  };

  return (
    <div>
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default Page;
