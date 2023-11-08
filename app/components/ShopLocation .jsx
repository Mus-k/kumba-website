import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ShopLocation = ({ shopName, location }) => {
	const mapContainerStyle = {
		marginTop: '10px',
		width: '100%',
		height: '250px',
	};

	const center = location;

	return (
		<LoadScript googleMapsApiKey="AIzaSyAH2HEuGm15YFNkzL-tiwBNiNDcs_nvKiM">
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={15}
			>
				<Marker position={location} title={shopName} />
			</GoogleMap>
		</LoadScript>
	);
};

export default ShopLocation;
