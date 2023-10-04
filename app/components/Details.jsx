import '../styles/Details.css';
export default function Details() {
	return (
		<div className="details py-10 w-[100%] flex justify-center px-3 items-center">
			<div className="details-wrapper ">
				<div
					className="detail-item flex flex-col justify-start items-start p-4 hover:bg-pink-100 transition-all duration-500"
				>
					<h1 className="fw-600 font-semibold text-2xl py-2 text-black">
						Cornrows
					</h1>
					<h4 className="fw-500 font-semibold text-1xl  py-1 text-pink-500">
						01
					</h4>
					<p className="fw-500 font-medium text-1xl py-1">
						Get your hair braided with our cornrows, a classic, popular
						style that never goes out of fashion. We can create a variety
						of styles that will have you looking and feeling great.
					</p>
				</div>
				<div
					className="detail-item flex flex-col justify-start items-start p-4
         hover:bg-pink-100
         transition-all duration-500"
				>
					<h1 className="fw-600 font-semibold text-2xl py-2 text-black">
						Hair Extensions
					</h1>
					<h4 className="fw-500 font-semibold text-1xl py-1 text-pink-500">
						02
					</h4>
					<p className="fw-500 font-medium text-1xl py-1">
						Want longer, fuller, and more voluminous hair? Our hair
						extensions will give you the hair you’ve always wanted without
						the wait.
					</p>
				</div>
				<div
					className="detail-item flex flex-col justify-start items-start p-4
         hover:bg-pink-100
         transition-all duration-500"
				>
					<h1 className="fw-600 font-semibold text-2xl py-2 text-black">
						Hair Weaving
					</h1>
					<h4 className="fw-500 font-semibold text-1xl py-1 text-pink-500 ">
						03
					</h4>
					<p className="fw-500 font-medium text-1xl py-1">
						Our hair weaving service is perfect for those who want to add
						volume and length to their hair without the commitment. Our
						experts will help you choose the best style and color to match
						your natural hair.
					</p>
				</div>
			</div>
		</div>
	);
}
