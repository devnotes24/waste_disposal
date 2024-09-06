const axios = require('axios');

exports.gMap = async (req, res) => {
    const { latitude, longitude, requestId , range , category } = req.body;
    const apiKey = 'AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M';

    try {
        const response1 = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                location: `${latitude},${longitude}`,
                radius: range, // Search within 10km radius
                // type: 'food collectors', // Example type, adjust as needed
                keyword: category, // Adjusted keyword for e-waste
                key: apiKey,
            }
        });

        const places = response1.data.results.slice(0, 6);

        const placesWithDetails = await Promise.all(places.map(async (place) => {
            const details = await getPlaceDetails(place.place_id, apiKey);
            return { ...place, ...details };
        }));

        res.json(placesWithDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPlaceDetails = async (placeId, apiKey) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
            params: {
                place_id: placeId,
                fields: 'formatted_phone_number',
                key: apiKey,
            }
        });

        return response.data.result || {};
    } catch (error) {
        console.error('Error fetching place details:', error.message);
        return {};
    }
};
