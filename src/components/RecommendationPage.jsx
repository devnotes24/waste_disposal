import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, CircularProgress, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ranges = [
    { value: 1000, label: '1 km' },
    { value: 5000, label: '5 km' },
    { value: 10000, label: '10 km' },
    { value: 15000, label: '15 km' },
    { value: 20000, label: '20 km' }
];

const categories = [
    { value: 'Plastic Waste disposal place', label: 'Plastic Waste' },
    { value: 'Wood Waste disposal place', label: 'Wood Waste' },
    { value: 'Medical Waste disposal place', label: 'Medical Waste' },
    { value: 'Organic Waste disposal place', label: 'Organic Waste' },
    { value: 'Food Waste disposal place', label: 'Food Waste' },
    { value: 'Hazardous Waste disposal place', label: 'Hazardous Waste' },
    { value: 'Industrial Waste disposal place', label: 'Industrial Waste' },
    { value: 'Biochemical Waste disposal place', label: 'Biochemical Waste' },
    { value: 'Solid Waste disposal place', label: 'Solid Waste' },
    { value: 'Liquid Waste disposal place', label: 'Liquid Waste' },
    { value: 'Recyclable Waste disposal place', label: 'Recyclable Waste' },
    { value: 'Construction Waste disposal place', label: 'Construction Waste' },
    { value: 'Agricultural Waste disposal place', label: 'Agricultural Waste' },
    { value: 'Chemical Waste disposal place', label: 'Chemical Waste' },
    { value: 'Electronic Waste disposal place', label: 'Electronic Waste' },
    { value: 'Textile Waste disposal place', label: 'Textile Waste' },
];

const RecommendationPage = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showNotFoundMsg, setShowNotFoundMsg] = useState(false);
    const [locationLoading, setLocationLoading] = useState(true);
    const [error, setError] = useState(null);
    const [locationName, setLocationName] = useState('');
    const [range, setRange] = useState(5000);
    const [category, setCategory] = useState('Plastic Waste disposal place');

    useEffect(() => {
        const getUserLocation = async () => {
            try {
                const position = await new Promise((resolve, reject) => {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => resolve(position.coords),
                            (error) => reject(error)
                        );
                    } else {
                        reject(new Error("Geolocation is not supported by this browser."));
                    }
                });
                const { latitude, longitude } = position;
                await fetchLocationName(latitude, longitude);
            } catch (err) {
                setError(err.message);
            } finally {
                setLocationLoading(false);
            }
        };

        getUserLocation();
    }, []);

    const handleFetchData = async () => {
        setLoading(true);
        setShowNotFoundMsg(true)
        try {
            const position = await new Promise((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => resolve(position.coords),
                        (error) => reject(error)
                    );
                } else {
                    reject(new Error("Geolocation is not supported by this browser."));
                }
            });
            const { latitude, longitude } = position;
            await fetchNearbyPlaces(latitude, longitude, range, category);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchNearbyPlaces = async (latitude, longitude, range, category) => {
        console.log({ latitude, longitude, range, category });
        try {
            const response = await fetch(`https://waste-disposal-v1cm.onrender.com/gMapRt/nearby`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ latitude, longitude, range, category })
            });
            const data = await response.json();
            setPlaces(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchLocationName = async (latitude, longitude) => {
        try {
            const apiKey = 'AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M';
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
            const data = await response.json();
            if (data.results.length > 0) {
                setLocationName(data.results[0].formatted_address);
            } else {
                setLocationName('Location not found');
            }
        } catch (err) {
            setError('Failed to fetch location name.',err);
        }
    };

    const generateMapPreview = (lat, lng) => {
        const apiKey = 'AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M';
        const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=600x300&markers=color:red%7C${lat},${lng}&key=${apiKey}`;
        return url;
    };

    return (
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: 2, backgroundColor: 'background.default', borderRadius: 2, boxShadow: 1 }}>
            {locationLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Typography variant="h2" align="center" sx={{ marginBottom: 2, fontSize: { xs: "20px", sm: "25px", md: "30px" } }}>
                        Your location: {locationName}
                    </Typography>

                    <Box sx={{ marginBottom: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center' }}>
                        <FormControl fullWidth sx={{ minWidth: 120 }}>
                            <InputLabel id="range-label">Range</InputLabel>
                            <Select
                                labelId="range-label"
                                value={range}
                                onChange={(e) => setRange(e.target.value)}
                                label="Range"
                            >
                                {ranges.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={{ minWidth: 120 }}>
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                label="Category"
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleFetchData}
                            sx={{ flexShrink: 0, whiteSpace: 'nowrap' }}
                        >
                            Fetch Recommendations
                        </Button>
                    </Box>

                    {loading ? (
                        <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
                    ) : error ? (
                        <Typography color="error" align="center">Error: {error}</Typography>
                    ) : (
                        <Box>{
                            showNotFoundMsg && 
                            <Typography variant="h2" align="center" sx={{ marginBottom: 2, fontSize: { xs: "20px", sm: "25px", md: "30px" } }}>
                                Nearby Service Providers
                            </Typography>
                            }
                            {places.length === 0 && showNotFoundMsg && (
                                <Typography variant="h2" align="center" sx={{ marginBottom: 2, mt: 8, color: 'red', fontSize: { xs: "12px", sm: "15px", md: "20px" } }}>
                                    No places found for the range and category provided
                                </Typography>
                            )}
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
                                {places.map(place => (
                                    <Card key={place.place_id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2, boxShadow: 2 }}>
                                        <CardMedia
                                            component="img"
                                            src={generateMapPreview(place.geometry.location.lat, place.geometry.location.lng)}
                                            alt={`Map preview of ${place.name}`}
                                            sx={{ width: '100%', height: '150px', objectFit: 'cover', borderBottom: '1px solid', borderColor: 'divider' }}
                                        />
                                        <CardContent sx={{ textAlign: 'center' }}>
                                            <Typography variant="h5" sx={{ marginBottom: 1, fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>
                                                {place.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>
                                                {place.vicinity}
                                            </Typography>
                                            <Typography variant="body2" color="warning.main" sx={{ marginBottom: 1, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>
                                                Rating: {place.rating} ★
                                            </Typography>
                                            <Typography variant="body2" sx={{ marginBottom: 1, fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>
                                                Contact: {place.formatted_phone_number || 'Not available'}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                href={`https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat},${place.geometry.location.lng}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px' } }}
                                            >
                                                View on Google Maps
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        </Box>
                    )}
                </>
            )}
        </Box>
    );
};

export default RecommendationPage;






// import  { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './RecommendationPage.css';
// // import { testData } from '../../public/testData';

// const RecommendationPage = () => {
//     const { requestId } = useParams();
//     const [places, setPlaces] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [locationName, setLocationName] = useState('');

//     useEffect(() => {
//         const getUserLocation = () => {
//             if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(
//                     (position) => {
//                         const { latitude, longitude } = position.coords;
//                         fetchNearbyPlaces(latitude, longitude);
//                         fetchLocationName(latitude, longitude);
//                     },
//                     (error) => {
//                         setError("Unable to retrieve location. " + error.message);
//                         setLoading(false);
//                     }
//                 );
//             } else {
//                 setError("Geolocation is not supported by this browser.");
//                 setLoading(false);
//             }
//         };

//         const fetchNearbyPlaces = async (latitude, longitude) => {
//             console.log({ latitude, longitude, requestId });
//             try {
//                 const response = await fetch(`http://localhost:8000/gMapRt/nearby`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ latitude, longitude, requestId : 4 })
//                 });
//                 const data = await response.json();
//                 setPlaces(data);
//                 console.log(data);
//                 // setPlaces(testData)
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchLocationName = async (latitude, longitude) => {
//             try {
//                 const apiKey = 'AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M';
//                 const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
//                 const data = await response.json();
//                 console.log(data);
//                 if (data.results.length > 0) {
                    
//                     setLocationName(data.results[0].formatted_address);
//                 } else {
//                     setLocationName('Location not found');
//                 }
//             } catch (err) {
//                 setError('Failed to fetch location name.' , err);
//             }
//         };

//         getUserLocation();
//     }, [requestId]);

//     const generateMapPreview = (lat, lng) => {
//         const apiKey = 'AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M';
//         const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=600x300&markers=color:red%7C${lat},${lng}&key=${apiKey}`;
//         return url;
//     };

//     if (loading) return <p>Loading recommendations...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Your location: {locationName}</h2>
//             <div className="recommendation-container">
//                 <h2>Nearby Service Providers</h2>
//                 <ul className="recommendation-list">
//                     {places.map(place => (
//                         <li key={place.place_id} className="recommendation-item">
//                             <img
//                                 className="place-map-preview"
//                                 src={generateMapPreview(place.geometry.location.lat, place.geometry.location.lng)}
//                                 alt={`Map preview of ${place.name}`}
//                             />
//                             <div className="place-details">
//                                 <h3>{place.name}</h3>
//                                 <p className="place-vicinity">{place.vicinity}</p>
//                                 <p className="place-rating">Rating: {place.rating} ★</p>
//                                 <p className="place-contact">Contact: {place.formatted_phone_number || 'Not available'}</p>
//                                 <a
//                                     className="place-map-link"
//                                     href={`https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat},${place.geometry.location.lng}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     View on Google Maps
//                                 </a>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default RecommendationPage;
