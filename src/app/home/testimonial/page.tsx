"use client";

import React, { useRef } from "react";
import styled from "styled-components";

const TestimonialsSection = styled.section`
  background: #ffffff;
  padding: 50px 70px;
  text-align: left;
  position: relative;
  background-image: url("/RBG.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #000;
  font-family: 'Poppins', sans-serif;

  span {
    color: #0073d7;
  }

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  padding: 25px;
  flex: 0 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  @media (max-width: 1024px) {
    width: 290px;
  }

  @media (max-width: 768px) {
    width: 270px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    width: 220px;
    padding: 15px;
  }
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 20px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
    font-family: 'Poppins', sans-serif;

  b {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #eee;
  margin: 20px 0;

  @media (max-width: 480px) {
    margin: 15px 0;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

const NameLocation = styled.div`
  font-size: 14px;
  color: #333;

  b {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    b {
      font-size: 13px;
    }
  }
`;

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  location,
  text,
  avatar,
}) => (
  <Card>
    <div>
      <Stars>★★★★★</Stars>
      <ReviewText dangerouslySetInnerHTML={{ __html: text }} />
    </div>
    <Divider />
    <Profile>
      <Avatar src={avatar} alt={name} />
      <NameLocation>
        <b>{name} –</b>
        <br />
        {location}
      </NameLocation>
    </Profile>
  </Card>
);

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: TestimonialProps[] = [
    {
      name: "Ravi Kumar",
      location: "Bengaluru, Karnataka",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: `I had a <b>5 lakh</b> personal loan I couldn’t repay. The agents started calling day and night, and I was so stressed. The team here helped me settle it for just <b>2 lakh</b>. Can’t believe how smooth it was!`,
    },
    {
      name: "Salma Begum",
      location: "Hyderabad, Telangana",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: `I was scared when recovery agents started coming to my house. They were so rude, and I didn’t know what to do. These guys handled everything for me and settled my <b>3 lakh</b> credit card debt for only <b>1.2 lakh</b>. Thank you for all your help!`,
    },
    {
      name: "Deepak Sharma",
      location: "Lucknow, Uttar Pradesh",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      text: `Agents came to my office and shouted in front of my colleagues. This team stopped all that and negotiated my <b>6 lakh</b> loan down to <b>2.5 lakh</b>. I can finally sleep now.`,
    },
    {
      name: "Rina D'souza",
      location: "Kochi, Kerala",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      text: `Recovery agents embarrassed me in front of my neighbors. This team handled everything, and I only had to pay <b>1 lakh</b> out of my <b>2.5 lakh</b> loan.`,
    },
    {
      name: "Ayesha Khan",
      location: "Pune, Maharashtra",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      text: `The agents were calling me every hour. I’m thankful they stopped the calls and got my <b>4 lakh</b> bill settled for <b>1.5 lakh</b>.`,
    },
  ];

  return (
    <TestimonialsSection>
      <Heading>
        Our <span>Testimonials</span>
      </Heading>
      <CardsWrapper ref={scrollRef}>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </CardsWrapper>
    </TestimonialsSection>
  );
}
