import Geocode from 'react-geocode';
import { getEnvVar } from 'utils/env';

Geocode.setApiKey(getEnvVar('GOOGLE_API_KEY'));

// set response language. Defaults to english.
Geocode.setLanguage('fr');

// set response region. Its optional.
Geocode.setRegion('fr');

// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType('ROOFTOP');

export const getLatLng = (address) =>
	Geocode.fromAddress(address)
		.then((response) => response.results[0].geometry.location)
		.catch(() => ({ lat: 0, lng: 0 }));

// TODO -> do something better in case of exeption
