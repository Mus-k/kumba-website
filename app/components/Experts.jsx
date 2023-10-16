import Image from 'next/image';
import '../styles/Expert.css';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
export default function Experts() {
	return (
		<section className="w-full p-6 pb-4 md:pb-16 flex flex-col justify-center items-center">
			<h1 className="text-lg md:text-2xl text-center py-4 font-bold">
				Meet our experts
			</h1>
			<div className="expert-container">
				<div className="expert-card">
					<div className="expert-left">
						<Image
							src="/expert/profile1.jpg"
							alt="Picture of the author"
							width={300}
							height={100}
							className="h-[350px] w-[300px]"
						/>
						<div className="icons">
							<p className="">
								<BsFacebook
									className="text-lg md:text-2xl text-blue-500
                cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<BsWhatsapp
									className="text-lg md:text-2xl text-green-500
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<AiOutlineInstagram
									className="text-lg md:text-2xl text-[#E1306C]
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<FaTiktok
									className="text-lg md:text-2xl text-[#EE1D52]
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
						</div>
					</div>
					<div className="expert-right bg-pink-100">
						<h3 className="text-lg pt-4 font-semibold md:text-xl">
							Caroline Johnson
						</h3>
						<p className="text-md md:text-lg">Manager</p>
					</div>
				</div>

				{/* 2 */}
				<div className="expert-card">
					<div className="expert-left">
						<Image
							src="/expert/profile2.jpg"
							alt="Picture of the author"
							width={300}
							height={100}
							className="h-[350px] w-[300px]"
						/>
						<div className="icons">
							<p className="">
								<BsFacebook
									className="text-lg md:text-2xl text-blue-500
                cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<BsWhatsapp
									className="text-lg md:text-2xl text-green-500
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<AiOutlineInstagram
									className="text-lg md:text-2xl text-[#E1306C]
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<FaTiktok
									className="text-lg md:text-2xl text-[#EE1D52]
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
						</div>
					</div>
					<div className="expert-right  bg-pink-100">
						<h3 className="text-lg font-semibold md:text-xl pt-4 ">
							Maveline cars
						</h3>
						<p className="text-md md:text-lg">Manager</p>
					</div>
				</div>
				{/* 3 */}
				<div className="expert-card">
					<div className="expert-left">
						<Image
							src="/expert/profile3.jpg"
							alt="Picture of the author"
							width={300}
							height={100}
							className="h-[350px] w-[300px]"
						/>
						<div className="icons">
							<p className="">
								<BsFacebook
									className="text-lg md:text-2xl text-blue-500
                cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<BsWhatsapp
									className="text-lg md:text-2xl text-green-500
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<AiOutlineInstagram
									className="text-lg md:text-2xl text-[#E1306C]
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
							<p>
								<FaTiktok
									className="text-lg md:text-2xl text-[#EE1D52]
                 cursor-pointer hover:scale-110 ease-in-out duration-500"
								/>
							</p>
						</div>
					</div>
					<div className="expert-right bg-pink-100">
						<h3
							className="text-lg font-semibold md:text-xl
            pt-4"
						>
							Veronica kote
						</h3>
						<p className="text-md md:text-lg">Manager</p>
					</div>
				</div>
			</div>
		</section>
	);
}
