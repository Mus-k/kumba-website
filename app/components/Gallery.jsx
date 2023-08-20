"use client";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../styles/Gallery.css";

export default function Gallery({ items }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery flex gap-0">
      
      {items.map((item, index) => (
        <div key={index}>
          <img
            src={`/images/${item.imageUrl}`}
            alt={item.title}
            onClick={() => openLightbox(index)}
          />
        </div>
      ))}

      {isOpen && (
        <div className="lightbox-container">
          <Lightbox
            mainSrc={`/images/${items[photoIndex].imageUrl}`}
            nextSrc={`/images/${
              items[(photoIndex + 1) % items.length].imageUrl
            }`}
            prevSrc={`/images/${
              items[(photoIndex + items.length - 1) % items.length].imageUrl
            }`}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + items.length - 1) % items.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % items.length)
            }
            className="lightbox-content"
          />
          <span className="lightbox-close" onClick={() => setIsOpen(false)}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
}
