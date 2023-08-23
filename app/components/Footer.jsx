import React from 'react';
import "../styles/Footer.css"
const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
					<span>FAQ</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum, eius explicabo ad magnam quia voluptatem soluta neque
						illum? Animi, necessitatibus.
					</span>
				</div>
				<div className="item">
					<h1>Contact</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum, eius explicabo ad magnam quia voluptatem soluta neque
						illum? Animi, necessitatibus.
					</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">ALYMCIABRAIDING MASTERS</span>
					<span className="copyright">
						&copy; Copyright 2023. All Right Revserved
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
