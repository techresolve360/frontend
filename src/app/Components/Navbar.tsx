"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Nav,
  LogoContainer,
  NavList,
  NavItem,
  ContactButton,
  EmailText,
  HamburgerMenu,
  MobileMenu,
} from "../Styles/NavbarStyles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/core-values", label: "Core Values" },
    { path: "/Resources", label: "Blog" },
  ];

  return (
    <Nav>
      {/* Logo */}
      <LogoContainer>
        <Link href="/" passHref>
          <Image
            src="https://d2uvjal4nw1o1a.cloudfront.net/public/Logo1.png"
            alt="Logo"
            width={150}
            height={32}
            priority
            style={{ cursor: "pointer" }}
          />
        </Link>
      </LogoContainer>

      {/* Hamburger Icon */}
      <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "open" : ""}></div>
        <div className={menuOpen ? "open" : ""}></div>
        <div className={menuOpen ? "open" : ""}></div>
      </HamburgerMenu>

      {/* Desktop Navigation */}
      <NavList className="desktop-menu">
        {navLinks.map(({ path, label }) => (
          <NavItem key={label}>
            <Link href={path}>{label}</Link>
          </NavItem>
        ))}

        {/* Contact Section (separate from NavItem) */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ContactButton>
            <img src="/callnow.png" alt="Call Icon" />
            +91 99004 75500
          </ContactButton>
          <EmailText href="mailto:support@resolve360.in">
            support@resolve360.in
          </EmailText>
        </div>
      </NavList>

      {/* Mobile Navigation */}
      <MobileMenu className={menuOpen ? "active" : ""}>
        {navLinks.map(({ path, label }) => (
          <NavItem key={label} onClick={() => setMenuOpen(false)}>
            <Link href={path}>{label}</Link>
          </NavItem>
        ))}

        {/* Mobile Contact Section */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <a href="tel:+91 99004 75500">
            <ContactButton>
              <img src="/callnow.png" alt="Call Icon" />
              +91 99004 75500
            </ContactButton>
          </a>
          <EmailText href="mailto:support@resolve360.in">
            support@resolve360.in
          </EmailText>
        </div>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
