import { IoMdCall } from 'react-icons/io';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function page() {
  const componentStyle = {
		backgroundImage: "url('/orgu/contactbg.jpg')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'none',
	};

	return (
		<div style={componentStyle} className="antialised bg-gray-100">
			<div className="flex w-full min-h-screen justify-center items-center">
				<div
					className="flex flex-col pt-24 md:pt-12 md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full
        max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden"
				>
					<div className="flex flex-col space-y-8 justify-between">
						<div>
							<h1 className="font-bold text-4xl tracking-wide text-white">
								Contact Us
							</h1>
							<p className="pt-2 text-cyan-100 text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Debitis distinctio nobis possimus accusamus quas
								sapiente!
							</p>
						</div>
						<div className="flex flex-col space-y-6">
							<div className="inline-flex space-x-2 items-center">
								<IoMdCall size={25} className="text-teal-300" />
								<span className="text-cyan-100">
									+(90) 538 366 53 05
								</span>
							</div>
							<div className="inline-flex space-x-2 items-center">
								<MdEmail size={25} className="text-teal-300" />
								<span className="text-cyan-100">
									alymciabraid@alymcia.com
								</span>
							</div>
							<div className="inline-flex space-x-2 items-center">
								<MdLocationOn size={25} className="text-teal-300" />
								<span className="text-cyan-100">
									Yeni mahalle 3131 sk No: 2 Samsun/Turkey
								</span>
							</div>
						</div>
						<div className="flex space-x-4 text-lg">
							<a href="" target="_">
								<BsFacebook />
							</a>
							<a href="samsun_afrika_orgusu_alymcia" target="_">
								<BsInstagram />
							</a>
							<a href="" target="_">
								<BsTwitter />
							</a>
							<a href="" target="_">
								<BsYoutube />
							</a>
						</div>
					</div>
					{/*contact form on the right*/}
					<div className="relative">
						{/* Circles */}
						<div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
						<div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-20"></div>

						<div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
							<form className="flex flex-col space-y-4">
								<div>
									<label htmlFor="">Your Name</label>
									<input
										required
										type="text"
										placeholder="Your name"
										className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2
                    outline-none focus:ring-2 focus:ring-purple-300"
									/>
								</div>
								<div>
									<label htmlFor="">Email Address</label>
									<input
										required
										type="text"
										placeholder="Your email address"
										className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2
                    outline-none focus:ring-2 focus:ring-purple-300"
									/>
								</div>
								<div>
									<label htmlFor="">Your Message</label>
									<textarea
										required
										type="text"
										placeholder="Your email address"
										rows={4}
										className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2
                    outline-none focus:ring-2 focus:ring-purple-300"
									/>
								</div>
								<button
									className="inline-block self-end bg-cyan-700
                text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
