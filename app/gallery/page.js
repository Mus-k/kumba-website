'use client';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../styles/Gallery.css';
import lightbox from '../../public/lightbox.json';
export default function Gallery() {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const openLightbox = (index) => {
		setPhotoIndex(index);
		setIsOpen(true);
	};

	return (
		<div className="gallery flex gap-0">
			{lightbox?.map((item, index) => (
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
						mainSrc={`/images/${lightbox[photoIndex].imageUrl}`}
						nextSrc={`/images/${
							lightbox[(photoIndex + 1) % lightbox.length].imageUrl
						}`}
						prevSrc={`/images/${
							lightbox[
								(photoIndex + lightbox.length - 1) % lightbox.length
							].imageUrl
						}`}
						onCloseRequest={() => setIsOpen(false)}
						onMovePrevRequest={() =>
							setPhotoIndex(
								(photoIndex + lightbox.length - 1) % lightbox.length
							)
						}
						onMoveNextRequest={() =>
							setPhotoIndex((photoIndex + 1) % lightbox.length)
						}
						className="lightbox-content"
					/>
					<span
						className="lightbox-close"
						onClick={() => setIsOpen(false)}
					>
						&times;
					</span>
				</div>
			)}
		</div>
	);
}
