import React from 'react';
import orgu from '../../public/orgu.json';
import Image from 'next/image';
export default function Orgu() {
	const componentStyle = {
		backgroundImage: "url('/orgu/orgubackground.jpg')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'none',
		zIndex: '-99',
	};

	return (
		<div
			style={componentStyle}
			className="pt-[90px] flex flex-col justify-center items-center w-full"
		>
			<div className="my-12">
				<h1 className="text-2xl text-white">
					HERE IS WHERE YOU CAN FIND OUR BEAUTIFUL BRADING STYLES
				</h1>
			</div>
			<div className="grid gap-10 md:grid-cols-2 md:gap-2 lg:gap-8 xl:gap-8 lg:grid-cols-3 items-center">
				{orgu.map((item) => (
					<div
						key={item.id}
						className=" flex mb-6 justify-center items-center"
					>
						<div className="flex flex-col mb-8">
							<div className="p-6 text-xl md:text-2xl">
								<h1 className="text-white text-[20px] p-4">
									{item.title}
								</h1>
							</div>
							<div className="flex flex-col items-center p-4 bg-white">
								<Image
									src={`/orgu/${item.url}`}
									width={300}
									height={300}
									alt={item.title}
									className="w-[380px] h-[400px] lg:w-[300px] lg:h-[400px]
									hover:scale-110 transition-all duration-500 xl:w-[450px] xl:h-[500px]"
								/>
								{/* <p className="text-white py-2">&#36;{item.price}</p> */}
								<div className="w-[300px] text-black p-4">
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
