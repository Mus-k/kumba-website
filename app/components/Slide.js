import React from 'react';

const Slide = ({slideContent}) => {
	return (
		<div className="h-[100%] flex flex-col items-center justify-center
		w-[60%]">
			<div className="text-white">
				<h2 className="text-3xl font-extrabold">{slideContent.title}</h2>
				<p className="text-lg">{slideContent.description}</p>
			</div>
			<button>Show</button>   
		</div>
	);
};

export default Slide;
