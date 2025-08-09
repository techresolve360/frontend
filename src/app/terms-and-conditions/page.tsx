"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

const PageContainer = styled.section`
  font-family: "Montserrat", sans-serif;
  color: #333;
  margin-top: 60px;
  background: #fafafa;
`;

const HeaderSection = styled.section`
  background-image: url("/BG1.png");
  background-size: cover;
  background-position: center;
  padding: 80px 150px;
  text-align: start;
  color: #fff;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

const ContentWrapper = styled.div`
  padding: 50px 150px;

  @media (max-width: 1024px) {
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #0073D7;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-top: 10px;

  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;

  a {
    color: #0073D7;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function TermsAndConditions() {
  return (
    <PageContainer
      as={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <HeaderSection>
        <Title>Terms & Conditions</Title>
        <Date>Last Updated: 23rd January 2025</Date>
      </HeaderSection>

      <ContentWrapper>
        <Paragraph>
          Welcome to Resolve360 (“we,” “our,” or “us”). By using our website{" "}
          <strong>[www.resolve360.in]</strong> or accessing our services, you
          (“user” or “client”) agree to comply with and be bound by these Terms
          and Conditions. Please read these terms carefully before using our
          website or services. If you do not agree with any part of these
          terms, please refrain from using our website or services.
        </Paragraph>

        <Section>
          <SectionTitle>1. Services Provided</SectionTitle>
          <List>
            <li>
              <strong>Loan Settlement Services:</strong> We assist individuals
              in negotiating and settling their outstanding personal loans or
              credit card dues with financial institutions.
            </li>
            <li>
              <strong>Anti-Harassment Support:</strong> We provide advisory and
              legal assistance to clients facing harassment from recovery
              agents.
            </li>
            <li>
              <strong>Scope of Service:</strong> Our role is advisory and
              facilitative; we do not provide financial loans or guarantee
              settlement outcomes.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Eligibility</SectionTitle>
          <List>
            <li>You must be at least 18 years old to use our services.</li>
            <li>
              You represent and warrant that the information you provide is
              accurate, complete, and not misleading.
            </li>
            <li>
              You agree to provide any documents or details required for us to
              deliver services effectively.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Client Responsibilities</SectionTitle>
          <List>
            <li>
              <strong>Accurate Information:</strong> You agree to provide
              accurate and complete financial details for the purposes of loan
              settlement negotiations.
            </li>
            <li>
              <strong>Cooperation:</strong> You agree to cooperate with us and
              promptly provide requested documents or information.
            </li>
            <li>
              <strong>Legal Compliance:</strong> You are responsible for
              complying with applicable laws, including honoring valid financial
              obligations.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Fees and Payment</SectionTitle>
          <List>
            <li>
              Our fees are fixed per transaction and will be communicated to you
              in writing before you engage our services.
            </li>
            <li>
              All fees must be paid as per the terms specified in our invoices
              or agreements.
            </li>
            <li>Fees are non-refundable unless explicitly stated otherwise.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Limitations of Service</SectionTitle>
          <List>
            <li>
              We act as facilitators and do not guarantee the outcome of loan
              settlement negotiations.
            </li>
            <li>
              We are not responsible for the decisions or actions of financial
              institutions, including refusal to negotiate.
            </li>
            <li>
              We do not assume liability for any legal action taken by financial
              institutions or third parties due to loan defaults.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Confidentiality and Privacy</SectionTitle>
          <List>
            <li>
              Your personal and financial information will be handled in
              accordance with our Privacy Policy.
            </li>
            <li>
              While we take reasonable steps to protect your data, you
              acknowledge that no system is entirely secure and accept this
              risk.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Intellectual Property</SectionTitle>
          <List>
            <li>
              All content, logos, designs, and materials on this website are the
              intellectual property of Resolve360 and may not be reproduced,
              distributed, or used without prior written consent.
            </li>
            <li>
              You may use the website only for personal, non-commercial
              purposes.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Disclaimer of Warranties</SectionTitle>
          <List>
            <li>
              Our services are provided on an “as-is” and “as-available” basis.
            </li>
            <li>
              We do not warrant the accuracy, reliability, or completeness of
              the information or services provided.
            </li>
            <li>
              We are not liable for any indirect, incidental, or consequential
              damages resulting from the use of our services.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Limitation of Liability</SectionTitle>
          <List>
            <li>
              To the extent permitted by Indian law, our liability for any
              claims arising from our services is limited to the fees paid by
              you for the specific service in question.
            </li>
            <li>
              We are not liable for any loss or damage arising from delays or
              failures in the loan settlement process.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Termination</SectionTitle>
          <List>
            <li>
              We reserve the right to terminate your access to our website or
              services at any time for any breach of these Terms and Conditions
              or applicable laws.
            </li>
            <li>Upon termination, all fees due shall remain payable.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>11. Governing Law and Jurisdiction</SectionTitle>
          <List>
            <li>These Terms and Conditions are governed by the laws of India.</li>
            <li>
              Any disputes will be subject to the exclusive jurisdiction of the
              courts of Bangalore.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>12. Grievance Redressal</SectionTitle>
          <Paragraph>
            In compliance with Indian law, we have appointed a Grievance Officer
            to address complaints or concerns.
          </Paragraph>
          <List>
            <li>Name: [Insert Name of Grievance Officer]</li>
            <li>Email: [Insert Email Address]</li>
            <li>Phone: [Insert Phone Number]</li>
            <li>Address: [Insert Office Address]</li>
          </List>
          <Paragraph>
            We aim to resolve grievances within 30 days of receipt.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>13. Changes to Terms and Conditions</SectionTitle>
          <List>
            <li>
              We reserve the right to update or modify these Terms and
              Conditions at any time. Changes will be posted with a revised
              "Last Updated" date.
            </li>
            <li>
              Continued use of our website or services constitutes acceptance of
              the revised Terms.
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>14. Contact Us</SectionTitle>
          <ContactInfo>
            <p>
              Email:{" "}
              <a href="mailto:support@resolve360.in">
                support@resolve360.in
              </a>
            </p>
            <p>
              Phone: <a href="tel:+917044432779">7044432779</a>
            </p>
            <p>
              Address: Baskara's Plaza, 2nd Floor, HSR Layout Sector 6, 560102,
              Karnataka, Bangalore
            </p>
          </ContactInfo>
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
}
