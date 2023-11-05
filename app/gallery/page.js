"use client";
import React, { useState } from "react";
import lightbox from "../../public/lightbox.json";
import {
  BiSolidSkipNextCircle,
  BiSolidSkipPreviousCircle,
} from "react-icons/bi";
import Image from "next/image";
import "../styles/Gallery.css";
export default function LightboxGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsOpen(true);
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImage((selectedImage - 1 + lightbox.length) % lightbox.length);
  };

  const goToNext = () => {
    setSelectedImage((selectedImage + 1) % lightbox.length);
  };

  return (
    <div>
      <div className="gallery">
        {lightbox?.map((item, index) => (
          <div key={index}>
            <Image
              src={`/images/${item.imageUrl}`}
              alt={item.title}
              width={500}
              height={500}
              layout="responsive"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-container">
          <div className="lightbox-content">
            <span className="closeButton" onClick={closeLightbox}>
              &times;
            </span>
            <Image
              src={`/images/${lightbox[selectedImage].imageUrl}`}
              alt={lightbox[selectedImage].title}
              width={500}
              height={500}
              layout="responsive"
              className=".lightbox-image"
            />
            <button className="prevButton" onClick={goToPrevious}>
              <BiSolidSkipPreviousCircle />
            </button>
            <button className="nextButton" onClick={goToNext}>
              <BiSolidSkipNextCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
