import '../styles/Slide.css';
export default function Slider() {
	const style = {
		objectFit: 'contain',
	};
	return (
		<div className="videoContainer ">
			<video className="video" autoPlay loop muted>
				<source src="/slide.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<h2>Hellow world</h2>
		</div>
	);
}
