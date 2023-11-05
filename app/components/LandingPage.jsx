'use client';
import '../styles/Slide.css';
import '../styles/LandingSliders.css';
import landingsliders from '../../public/landingsliders.json';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const slideInterval = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % landingsliders.length
			);
		}, 4000);

		return () => {
			clearInterval(slideInterval);
		};
	}, [currentIndex]);

	const style = {
		objectFit: 'contain',
	};

	const currentDate = new Date();
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const fullDate = currentDate.toLocaleDateString('en-US', options);

	return (
		<div className="videoContainer ">
			<video className="video" autoPlay loop muted>
				<source src="/slide.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div
				className="flex flex-col justify-center items-center absolute top-[50%] left-1/2 transform
				-translate-x-1/2 -translate-y-1/2 h-[40%] w-[70%] bg-orange-300
				opacity-50 overflow-hidden"
			>
				<h1 className="text-4xl text-blue-700 font-extrabold p-5">
					WELCOME TO ALYMCIABRAIDING MASTERS
				</h1>
				<div className="w-[100%] h-full flex">
					{landingsliders.map((landingslider, index) => (
						<div
							key={index}
							className={`landingslider ${
								index === currentIndex ? 'active mainDiv' : 'inactive'
							}`}
						>
							<div
								className="flex flex-col w-full gap-4 relative h-[80%]
							justify-center items-center"
							>
								<h1 className="text-blue-700 font-bold text-2xl">
									{fullDate}
								</h1>
								<h1 className="text-2xl">{landingslider.discrib}</h1>
							</div>
							<Link href="/contact">
								<button
									className="buttonCl inline-block bg-cyan-700
									text-white font-bold rounded-lg px-6 py-2 uppercase text-md mb-5"
								>
									Contact us
								</button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
