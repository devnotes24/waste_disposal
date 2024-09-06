// client/src/pages/RecommendationPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecommendationPage.css';

const RecommendationPage = () => {
    const { requestId } = useParams();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        fetchNearbyPlaces(latitude, longitude);
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
                console.log(data);
                setPlaces(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUserLocation();
    }, [requestId]);

    if (loading) return <p>Loading recommendations...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="recommendation-container">
            <h2>Nearby Service Providers</h2>
            <ul className="recommendation-list">
                {places.map(place => (
                    <li key={place.place_id} className="recommendation-item">
                        <img src={place.icon || 'https://via.placeholder.com/50'} alt={place.name} />
                        <div>
                            <h3>{place.name}</h3>
                            <p>{place.vicinity}</p>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat},${place.geometry.location.lng}`} target="_blank" rel="noopener noreferrer">
                                View on Google Maps
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationPage;
