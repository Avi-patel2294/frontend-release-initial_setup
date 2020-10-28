import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const LocationContext = createContext({});

const LocationContextProvider = (props) => {
	const [currentLocation, setCurrentLocation] = useState({});
	useEffect(() => {
		const geolocation = navigator.geolocation;
		async function getLocationData(lat, lng) {
			const res = await axios.get(
				`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?outSR=4326&returnIntersection=false&location=${lng},${lat}&f=json`
			);
			setCurrentLocation({
				address: res.data.address.Address,
				city: res.data.address.City,
				state: res.data.address.Region,
				postal: res.data.address.Postal,
				country: res.data.address.CountryCode,
				lat: lat,
				lng: lng,
			});
		}
		if (!geolocation) {
			axios.get(`http://ip-api.com/json`).then((res) => {
				getLocationData(res.data.lat, res.data.lon);
			});
		} else {
			geolocation.getCurrentPosition(
				(position) => {
					getLocationData(position.coords.latitude, position.coords.longitude);
				},
				() => {
					axios.get(`http://ip-api.com/json`).then(async (res) => {
						getLocationData(res.data.lat, res.data.lon);
					});
				}
			);
		}
	}, []);

	// console.log(currentLocation);
	return (
		<LocationContext.Provider value={currentLocation}>
			{props.children}
		</LocationContext.Provider>
	);
};
export default LocationContextProvider;
