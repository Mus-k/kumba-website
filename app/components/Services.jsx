import '../styles/Services.css';
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
		<div className="flex flex-col w-full bg-pink-100 items-center pb-5 justify-center px-5">
			<h1 className="text-3xl font-bold p-8 flex items-center">
				OUR SERVICES
			</h1>
			<div className="w-[100%] grid grid-cols-3 justify-center items-center flex-wrap md:flex-nowrap">
				{items.map((item) => (
					<div key={item.id} className="m-4 max-w-[450px] relative">
						<Link href={item.url}>
							<div className="p-4 text-black/[0.9] flex justify-center items-center">
								<h2 className="text-lg font-medium">{item.title}</h2>
							</div>
							<Image
								width={500}
								height={500}
								src={`/images/${item.src}`}
								alt={item.title}
								className="w-[100%] h-[350px] lg:h-[400px] object-cover
								hover:scale-110 transition-all duration-500"
							/>
							<button
								className="buttonCl flex justify-center uppercase font-medium
							hover:scale-105 transition-all
							duration-500 cursor-pointer hover:opacity-90
							rounded-md text-white/[0.9] text-[15px] md:text-[18px]
							px-4 py-3 font-oswald absolute
							top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							>
								See more
							</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
