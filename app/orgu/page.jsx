import React from 'react';
import orgu from '../../public/orgu.json';
import Image from 'next/image';
export default function Orgu() {
	const componentStyle = {
		backgroundImage: "url('/orgu/orgubackground.jpg')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'none',
		zIndex: -99,
		/* Other styles */
	};

	return (
		<div
			style={componentStyle}
			className="pt-[90px] flex flex-col justify-center items-center"
		>
			<div className='my-12'>
				<h1 className="text-2xl text-white">
					HERE IS WHERE YOU CAN FIND OUR BEAUTIFUL BRADING STYLES
				</h1>
			</div>
			<div className="flex flex-wrap justify-around items-center">
				{orgu.map((item) => (
					<div key={item.id}>
						<div className="flex flex-col mb-8">
							<div className="text-white p-6 text-xl md:text-2xl">
								<h1>{item.title}</h1>
							</div>
							<div>
								<Image
									src={`/orgu/${item.url}`}
									width={500}
									height={500}
									alt={item.title}
									className="w-[330px] h-[300px]"
								/>
								<p className="text-white">&#36;{item.price}</p>
								<div className="w-[300px] text-white">
									<h2>{item.desc}</h2>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
