import React from "react";
import "../styles/Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer bg-black p-4">
      <div className="top grid md:grid-cols-3 min-w-screen-md sm:p-10 md:px-16 md:pt-8">
        <div className="item w-[100%] text-white">
          <h1 className="font-bold text-2xl text-teal-500">Categories</h1>
          <Link href="/about" className="text-blue-700">
            about
          </Link>
          <Link href="/gallery" className="text-blue-700">
            gallery
          </Link>
          <Link href="/products" className="text-blue-700">
            products
          </Link>
          <Link href="/contact" className="text-blue-700">
            contact
          </Link>
        </div>
        <div className="item">
          <Link href="/about">
            <h1 className="font-bold text-2xl text-teal-500">About</h1>
          </Link>
          <span className="text-white text-left font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eius
            explicabo ad magnam quia voluptatem soluta neque illum? Animi,
            necessitatibus.
          </span>
        </div>
        <div className="item">
          <Link href="/contact">
            <h1 className="font-bold text-2xl text-teal-500">Contact</h1>
          </Link>
          <span className="text-white text-left font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eius
            explicabo ad magnam quia voluptatem soluta neque illum? Animi,
            necessitatibus.
          </span>
        </div>
        <div className="flex space-x-4 text-lg text-teal-500">
          <a href="#" target="_">
            <BsFacebook />
          </a>
          <a href="samsun_afrika_orgusu_alymcia" target="_">
            <BsInstagram />
          </a>
          <a href="#" target="_">
            <BsTwitter />
          </a>
          <a href="#" target="_">
            <BsYoutube />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="bottom-logo">ALYMCIABRAIDING MASTERS</span>
          <span className="copyright">
            &copy; Copyright. {new Date().getFullYear()} All Right Revserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
