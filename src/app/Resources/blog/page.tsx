"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebookF, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLink } from "react-icons/bi";

// --- Styled Components ---
const BlogWrapper = styled.section`
  max-width: 850px;
  margin: 0 auto;
  padding: 120px 20px;
  font-family: "Poppins", sans-serif;
  line-height: 1.8;
  color: #1f2937;
@media (max-width: 1200px) {
    padding: 120px 50px 10px 50px;
    gap: 50px;
  }

  @media (max-width: 992px) {
    padding: 120px 40px 40px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: start;
    padding: 120px 20px 40px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 120px 16px 40px 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
font-size: 38px;
    font-weight: 800;
    margin-bottom: 24px;
    color: #000;
    font-family: "poppins", sans-serif;
    line-height: 1.2;

    span {
      color: #0073d7;
    }

    @media (max-width: 992px) {
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 18px;
`;

const Subheading = styled.p`
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 24px;
  color: #374151;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0073d7;
  margin: 32px 0 14px;
  border-left: 4px solid #0073d7;
  padding-left: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
  color: #374151;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 24px;

  li {
    margin-bottom: 12px;
    list-style: disc;
    font-size: 1rem;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 40px 0;
`;

// --- Footer Section ---
const ShareSection = styled.div`
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  padding: 20px 0;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const IconsRow = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.2rem;
  color: #374151;

  svg {
    cursor: pointer;
    transition: all 0.2s ease;
  }

  svg:hover {
    color: #0073d7;
  }
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #6b7280;
`;

interface LikeButtonProps {
  liked: boolean;
}

const LikeButton = styled.span<LikeButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: ${({ liked }) => (liked ? "red" : "#374151")};

  svg {
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

// --- Comment Section ---
const CommentsSection = styled.div`
  margin-top: 50px;
`;

const CommentTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: #111827;
`;

const CommentBox = styled.textarea`
  width: 100%;
  padding: 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: #0073d7;
    box-shadow: 0 0 0 2px rgba(0, 115, 215, 0.2);
  }
`;

const SubmitButton = styled.button`
  margin-top: 12px;
  background: #0073d7;
  color: white;
  font-size: 0.95rem;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #005bb5;
  }
`;

// --- Blog Data ---
const blogData = {
  title: "Your Rights as a Borrower: Dealing with Harassment from Recovery Agents",
  author: "Vipin Choudhary",
  date: "Dec 9, 2024",
  readTime: "3 min read",
  subheading: "Understand Your Legal Rights and How to Halt Unethical Practices",
  heroImage:
    "https://d2uvjal4nw1o1a.cloudfront.net/public/Blog.webp",
  sections: [
    {
      type: "paragraph",
      text: "Struggling to repay a loan is challenging enough without the added pressure of harassment from recovery agents. Unfortunately, many borrowers face aggressive calls, threats, or even public shaming. However, you have rights that protect you from such practices. This blog by Resolve360 highlights your legal protections under Reserve Bank of India (RBI) guidelines, common harassment tactics, and how our services can help shield you from recovery agents.",
    },
    {
      type: "section",
      title: "Understanding Borrower Rights Under RBI Guidelines",
      text: "The RBI has established a framework to ensure borrowers are treated fairly and respectfully during debt recovery. Knowing these rights is the first step to protecting yourself.",
      list: [
        "Right to Privacy: Recovery agents are prohibited from sharing your loan details with unauthorized individuals such as neighbors or colleagues.",
        "Right to Fair Treatment: Agents must maintain professionalism and refrain from using abusive language, threats, or coercion.",
        "Right to Restricted Contact Hours: Recovery agents can only contact you between 8:00 AM and 7:00 PM. Calls outside these hours violate RBI norms.",
        "Right to Authorized Communication: Only authorized recovery agents can contact you, and their details must be shared with you in advance.",
        "Right to Grievance Redressal: You can file complaints if agents violate your rights. Banks must have a grievance mechanism to address borrower issues.",
      ],
    },
    {
      type: "section",
      title: "Common Harassment Tactics by Recovery Agents",
      text: "Despite clear guidelines, some recovery agents resort to unethical practices, including:",
      list: [
        "Frequent and Intimidating Calls: Repeated calls to you or your family to create undue pressure.",
        "Threats or Abuse: Use of aggressive language or unwarranted legal threats.",
        "Public Shaming: Visiting your home or workplace to humiliate you.",
        "Unauthorized Fees: Demanding payments beyond what is legally owed.",
      ],
    },
  ],
};

// --- Blog Component ---
const BlogPost = () => {
  const [liked, setLiked] = useState(false);
  const [views] = useState(39);
  const [comments] = useState(0);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => setLiked(!liked);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      alert(`Comment submitted: ${newComment}`);
      setNewComment("");
    }
  };

  return (
    <BlogWrapper>
      <Header>
        <Title>{blogData.title}</Title>
        <Meta>
          {blogData.author} • {blogData.date} • {blogData.readTime}
        </Meta>
        <Subheading>{blogData.subheading}</Subheading>
        <HeroImage src={blogData.heroImage} alt="Blog Hero" />
      </Header>

      {blogData.sections.map((section, index) => (
        <div key={index}>
          {section.type === "paragraph" && <Paragraph>{section.text}</Paragraph>}
          {section.type === "section" && (
            <>
              <SectionTitle>{section.title}</SectionTitle>
              {section.text && <Paragraph>{section.text}</Paragraph>}
              {section.list && (
                <List>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              )}
              {index !== blogData.sections.length - 1 && <Divider />}
            </>
          )}
        </div>
      ))}

      {/* Share + Stats */}
      <ShareSection>
        <IconsRow>
          <FaFacebookF />
          <FaXTwitter />
          <FaLinkedinIn />
          <BiLink />
        </IconsRow>

        <StatsRow>
          <span>
            {views} views • {comments} comments
          </span>
          <LikeButton liked={liked} onClick={handleLike}>
            <span>{liked ? "2" : "1"}</span>
            <FaHeart />
          </LikeButton>
        </StatsRow>
      </ShareSection>

      {/* Comments */}
      <CommentsSection>
        <CommentTitle>Comments</CommentTitle>
        <CommentBox
          rows={3}
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <SubmitButton onClick={handleCommentSubmit}>Post Comment</SubmitButton>
      </CommentsSection>
    </BlogWrapper>
  );
};

export default BlogPost;
