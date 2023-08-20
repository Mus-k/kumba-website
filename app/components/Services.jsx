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
		<div className="flex flex-col items-center w-full justify-center">
			<h1 className='text-3xl font-bold p-8 flex items-center'>OUR SERVICES</h1>
			<div className="flex w-full bg-pink-300 flex-wrap py-5 justify-around items-center">
				{items.map((item) => (
					<div
						key={item.id}
						className="flex mb-5 relative justify-center items-cente rounded-sm"
					>
						<Link href={item.url}>
							<div className="p-4 text-black/[0.9] flex justify-center items-center">
								<h2 className="text-lg font-medium">{item.title}</h2>
							</div>
							<Image
								width={500}
								height={500}
								src={`/images/${item.src}`}
								alt={item.title}
								className="w-[330px] h-[300px]"
							/>
							<button
								className="px-[15px] w-[200px] py-[10px] md:mx-[20px] font-oswald bg-white absolute bottom-[20px]
              md:bottom-[50px] left-10 right-10 rounded-md text-black/[0.9] text-[15px] md:text-[24px]
              uppercase font-medium cursor-pointer hover:opacity-90"
							>
								Fazlası gör
							</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
