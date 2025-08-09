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

export default function PrivacyPolicy() {
  return (
    <PageContainer
      as={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderSection>
        <Title>Privacy Policy</Title>
        <Date>Last Updated: 23rd January, 2025</Date>
      </HeaderSection>

      <ContentWrapper>
        <Section>
          <SectionTitle>Introduction</SectionTitle>
          <Paragraph>
            Resolve360 (“we,” “our,” “us”) respects your privacy and is committed to safeguarding any personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website <strong>[www.resolve360.in]</strong> and services. By accessing or using our website, you consent to the terms outlined in this Privacy Policy.
          </Paragraph>
          <Paragraph>
            We comply with all applicable Indian laws, including the Information Technology Act, 2000, and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>
          <List>
            <li><strong>Personal Information:</strong> Name, contact number, email address, and details voluntarily provided via forms or consultations. Financial information such as loan account numbers, outstanding amounts, and associated documents.</li>
            <li><strong>Sensitive Personal Data or Information (SPDI):</strong> Information related to financial transactions, such as debt amounts or credit history, which qualifies as SPDI under Indian law.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, IP address, device details, and other technical data collected through cookies and analytics tools.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <List>
            <li>To provide loan settlement, legal, and anti-harassment services.</li>
            <li>To evaluate your financial situation and negotiate settlements with lenders or financial institutions.</li>
            <li>To enhance our services and improve user experience.</li>
            <li>To communicate service updates, offers, and notifications.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Sharing Your Information</SectionTitle>
          <List>
            <li><strong>With Lenders or Financial Institutions:</strong> To negotiate settlements on your behalf.</li>
            <li><strong>With Legal Experts or Consultants:</strong> To offer professional support for your case.</li>
            <li><strong>With Service Providers:</strong> To facilitate technology, payment processing, or analytics, bound by confidentiality agreements.</li>
            <li><strong>As Required by Law:</strong> To comply with court orders, legal obligations, or regulatory requirements.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Data Security</SectionTitle>
          <List>
            <li>Secure servers, encryption, and firewalls.</li>
            <li>Regular audits and monitoring of security systems.</li>
          </List>
          <Paragraph>
            While we take measures to secure your data, no system is entirely foolproof. By using our services, you acknowledge and accept this inherent risk.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Your Rights</SectionTitle>
          <List>
            <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request corrections or updates to your information.</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw consent to process your data, subject to legal or contractual obligations.</li>
            <li><strong>Deletion:</strong> Request deletion of your information, except where retention is legally required.</li>
          </List>
          <Paragraph>
            To exercise these rights, contact us using the details provided in Section 10.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Cookies and Tracking</SectionTitle>
          <Paragraph>
            Our website uses cookies to:
          </Paragraph>
          <List>
            <li>Enhance your user experience.</li>
            <li>Analyze website traffic and usage patterns.</li>
          </List>
          <Paragraph>
            You can manage your cookie preferences via browser settings. By continuing to use our website, you consent to our use of cookies.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Third-Party Links</SectionTitle>
          <Paragraph>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies before sharing any information.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Updates to This Policy</SectionTitle>
          <Paragraph>
            We reserve the right to update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised "Last Updated" date.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. Grievance Redressal Mechanism</SectionTitle>
          <Paragraph>
            In compliance with Indian laws, we have designated a Grievance Officer to address concerns related to data privacy and security. You may contact our Grievance Officer at:
          </Paragraph>
          <ContactInfo>
            <p><strong>Name:</strong> Resolve360</p>
            <p>Email: <a href="mailto:support@resolve360.in">support@resolve360.in</a></p>
            <p>Phone: <a href="tel:+917044432779">7044432779</a></p>
            <p>Address: Baskara's Plaza, 2nd Floor, HSR Layout Sector 6, 560102, Karnataka, Bangalore</p>
          </ContactInfo>
          <Paragraph>
            We strive to resolve grievances within 30 days of receipt.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>10. Contact Us</SectionTitle>
          <Paragraph>
            For any questions or concerns regarding this Privacy Policy, please contact us at:
          </Paragraph>
          <ContactInfo>
            <p>Email: <a href="mailto:support@resolve360.in">support@resolve360.in</a></p>
            <p>Phone: <a href="tel:+917044432779">7044432779</a></p>
            <p>Address: Baskara's Plaza, 2nd Floor, HSR Layout Sector 6, 560102, Karnataka, Bangalore</p>
          </ContactInfo>
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
}
