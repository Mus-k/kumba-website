import Image from 'next/image';
import Link from 'next/link';
//import Carousel from 'react-multi-carousel';

export default function Services({ items }) {
	// const responsive = {
	// 	// superLargeDesktop: {
	// 	// 	// the naming can be any, depends on you.
	// 	// 	breakpoint: { max: 4000, min: 3000 },
	// 	// 	items: 5,
	// 	// },
	// 	desktop: {
	// 		breakpoint: { max: 3000, min: 1024 },
	// 		items: 3,
	// 	},
	// 	tablet: {
	// 		breakpoint: { max: 1024, min: 464 },
	// 		items: 2,
	// 	},
	// 	mobile: {
	// 		breakpoint: { max: 464, min: 0 },
	// 		items: 1,
	// 	},
	// };

	return (
		<div className="flex flex-col w-full bg-pink-100 items-center pb-5 justify-center px-5 border-2 border-purple-500">
			<h1 className="text-3xl font-bold p-8 flex items-center">
				OUR SERVICES
			</h1>
			<div className="flex w-full flex-wrap border-2 border-black py-5 justify-around items-center">
				{items.map((item) => (
					<Link
						href={item.url}
						key={item.id}
						className="flex flex-col justify-center items-center flex-wrap border-2 border-green-600 w-[30%] relative"
					>
						<div className="p-4 text-black/[0.9] flex justify-center items-center">
							<h2 className="text-lg font-medium">{item.title}</h2>
						</div>
						<Image
							width={500}
							height={500}
							src={`/images/${item.src}`}
							alt={item.title}
							className="w-full h-[350px] lg:h-[400px] object-cover"
						/>
						<button
							className="px-4 w-[200px] py-[10px] font-oswald bg-white absolute bottom-[20px]
								md:bottom-[50px] rounded-md text-black/[0.9] text-[15px] md:text-[24px]
								uppercase font-medium cursor-pointer hover:opacity-90"
						>
							Fazlası gör
						</button>
					</Link>
				))}
			</div>
		</div>
	);
}
