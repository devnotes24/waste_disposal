import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecommendationPage.css';

const RecommendationPage = () => {
    const { requestId } = useParams();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [locationName, setLocationName] = useState('');

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        fetchNearbyPlaces(latitude, longitude);
                        fetchLocationName(latitude, longitude);
                    },
                    (error) => {
                        setError("Unable to retrieve location. " + error.message);
                        setLoading(false);
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
                setLoading(false);
            }
        };

        const fetchNearbyPlaces = async (latitude, longitude) => {
            try {
                const response = await fetch(`https://waste-disposal-v1cm.onrender.com/gMapRt/nearby`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ latitude, longitude, requestId })
                });
                const data = await response.json();
                setPlaces(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchLocationName = async (latitude, longitude) => {
            try {
                const apiKey = 'AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M';
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
                const data = await response.json();
                console.log(data);
                if (data.results.length > 0) {
                    
                    setLocationName(data.results[0].formatted_address);
                } else {
                    setLocationName('Location not found');
                }
            } catch (err) {
                setError('Failed to fetch location name.',err);
            }
        };

        getUserLocation();
    }, [requestId]);

    const generateMapPreview = (lat, lng) => {
        const apiKey = 'AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M';
        const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=600x300&markers=color:red%7C${lat},${lng}&key=${apiKey}`;
        return url;
    };

    if (loading) return <p>Loading recommendations...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Your location: {locationName}</h2>
            <div className="recommendation-container">
                <h2>Nearby Service Providers</h2>
                <ul className="recommendation-list">
                    {places.map(place => (
                        <li key={place.place_id} className="recommendation-item">
                            <img
                                className="place-map-preview"
                                src={generateMapPreview(place.geometry.location.lat, place.geometry.location.lng)}
                                alt={`Map preview of ${place.name}`}
                            />
                            <div className="place-details">
                                <h3>{place.name}</h3>
                                <p className="place-vicinity">{place.vicinity}</p>
                                <p className="place-rating">Rating: {place.rating} ★</p>
                                <p className="place-contact">Contact: {place.formatted_phone_number || 'Not available'}</p>
                                <a
                                    className="place-map-link"
                                    href={`https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat},${place.geometry.location.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecommendationPage;
