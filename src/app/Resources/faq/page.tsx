"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const FaqSection = styled.section`
  width: 100%;
  padding: 40px 70px;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const FaqContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const FaqTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #000;
  text-align: left;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const BlueText = styled.span`
  color: #0073d7;
`;

const FaqItem = styled.div`
  border-top: 1px solid #ccc;
  padding: 15px 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    padding: 12px 0;
  }
`;

const Question = styled.div`
  font-size: 1.2rem;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

interface AnswerProps {
  isOpen: boolean;
}

const Answer = styled.div<AnswerProps>`
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  color: #333;
  margin-top: 10px;
  max-height: ${({ isOpen }) => (isOpen ? "1500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

  ul {
    padding-left: 20px;
    margin: 8px 0;
    list-style-type: disc;
  }

  li {
    margin-bottom: 8px;
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Icon = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  color: #000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

interface FaqItemType {
  question: string;
  answer: string | string[];
}

const faqData: FaqItemType[] = [
  {
    question: "What is a Loan Settlement?",
    answer:
      "A loan settlement is a process where we negotiate with your lender to accept a reduced payment as a one-time settlement, allowing you to clear your debts for less than the total outstanding amount.",
  },
  {
    question: "Does settling a loan affect my credit score?",
    answer: [
      "Yes, settling a loan can affect your credit score, but it depends on the situation:",
      "Short-Term Impact : When you settle a loan, it may be reported as <b>settled</b> instead of <b>closed</b> on your credit report. This can lower your score temporarily.",
      "Long-Term Benefits : Over time, the impact lessens, and you can rebuild your credit by maintaining financial discipline and paying future dues on time.",
      "Our Expertise : At Resolve360, we aim to minimise the impact on your credit score by negotiating with lenders for favourable terms, such as updating your status to <b>paid in full.</b>",
      "<b>Remember, settling a loan is often a better alternative to defaulting, which has more severe consequences.</b>",
    ],
  },
  {
    question: "How much can I save through a loan settlement?",
    answer:
      `The savings from a loan settlement depend on your case and lender negotiations. Here's what to expect:

- Negotiable Amount : Lenders often agree to waive late fees, penalties, or even a portion of the principal amount.
- Typical Savings : Customers typically save up to 60% of the outstanding amount, depending on the loan type, lender policies, and financial hardships.
- Resolve360 Advantage : With over 20 years of legal experience, we specialise in securing the best settlement offers for our clients.
Let us assess your case during the free consultation and estimate how much you can save. 
<b>Our anti-harassment services cost INR 1100/- per month. Loan settlement services can be shared only after case evaluation, which is free of cost.</b>`,
  },
  {
    question: "How do I stop recovery agents from harassing me?",
    answer:
      `- Know Your Rights : Recovery agents must follow specific rules outlined by the Reserve Bank of India (RBI). Majority of them violate the same by harassing you.
- Engage a Legal Expert: Our Legal Expert at Resolve360 will act as a SHIELD between you and recovery agent. Our mechanism of legal SHIELD is backed by RBI compliance directives, Supreme Court guidelines and laws of India. 
- Start Now : Contact Us for Free Consultation and we will explain our Anti-Harassment Services in detail at Zero cost and no commitment.`,
  },
  {
    question: "What happens during the free consultation?",
    answer:
      `- Understanding Your Situation : Our experts will listen to your concerns, whether it’s loan repayment challenges, recovery agent harassment.
- Case Evaluation : We analyse your loan details, lender communications, and financial standing.
- Action Plan : Based on your case, we’ll outline a step-by-step plan, including possible savings, timeline, and next steps.
- No Obligation : This consultation is completely free, and there’s no obligation to proceed unless you’re comfortable.
<b>It’s the first step toward resolving your financial challenges with confidence and clarity.</b>`,
  },
  {
    question: "How long does the settlement process take?",
    answer:
      "The timeline varies, but most settlements are completed within 3-6 months. We keep you updated throughout the process.",
  },
  {
    question: "How do I get started?",
    answer:
      `- Reach Out: Submit your details through our form or book a free consultation call directly via our website.
- Free Consultation: During your first free consultation, our experts will understand your financial situation and the challenges you're facing.
- Plan of Action: We’ll provide you with a step-by-step solution, tailored to your needs.
- Start the Process: Once you’re ready, we’ll take care of all the negotiations and formalities for you.
<b>Let us handle the complexities so you can focus on what matters most.</b>`,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Helper to render answers that can be string or array of strings with bullet points
  const renderAnswer = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return (
        <ul>
          {answer.map((ans, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{ __html: ans }}
            />
          ))}
        </ul>
      );
    } else {
      // For multi-line strings, convert lines starting with "-" or "•" to bullet points
      // We'll parse answer string here to bullet points if needed:
      if (answer.includes("\n") || answer.includes("-") || answer.includes("•")) {
        // Split by lines, trim, and filter non-empty lines
        const lines = answer
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0);

        // If most lines start with "-" or "•", render as bullet list
        const bulletLines = lines.filter(
          (line) => line.startsWith("-") || line.startsWith("•")
        );

        if (bulletLines.length >= 1) {
          return (
            <ul>
              {lines.map((line, idx) => {
                // Remove leading "- " or "• "
                const cleanLine = line.replace(/^[-•]\s*/, "");
                return (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: cleanLine }}
                  />
                );
              })}
            </ul>
          );
        }
      }

      // Else render as simple paragraph
      return <p dangerouslySetInnerHTML={{ __html: answer }} />;
    }
  };

  return (
    <FaqSection>
      <FaqContainer>
        <FaqTitle>
          Frequently Asked <BlueText>Questions</BlueText>
        </FaqTitle>

        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FaqItem onClick={() => toggleFaq(index)}>
              <Question>
                {item.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </Question>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Answer isOpen={openIndex === index}>
                  {renderAnswer(item.answer)}
                </Answer>
              </motion.div>
            </FaqItem>
          </motion.div>
        ))}
      </FaqContainer>
    </FaqSection>
  );
};

export default Faq;
