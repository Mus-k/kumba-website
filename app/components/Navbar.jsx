"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import '../styles/Navbar.css'
export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Logo</div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link href="/" className="nav-item" onClick={handleClick}>
            Home
          </Link>
          <Link href="#" className="nav-item" onClick={handleClick}>
            Gallery
          </Link>
          <Link href="/products" className="nav-item" onClick={handleClick}>
            Products
          </Link>
          <Link href="/about" className="nav-item" onClick={handleClick}>
            About
          </Link>
          <Link href="/contact" className="nav-item" onClick={handleClick}>
            Contact
          </Link>
        </ul>
        <div
          className={click ? "nav-icon active" : "nav-icon"}
          onClick={handleClick}
        >
          {click ? <AiOutlineClose/> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}
