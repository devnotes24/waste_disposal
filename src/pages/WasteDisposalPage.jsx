import { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, Divider } from '@mui/material';
import wasteData from '../../public/wasteData'; // Ensure wasteData contains multiple waste types with image, title, and description

function WasteDisposal() {
  const [selectedWaste, setSelectedWaste] = useState(null);

  const handleCardClick = (wasteType) => {
    setSelectedWaste(wasteType);
  };

  const renderCard = (wasteType) => {
    const { image, title, description } = wasteData[wasteType];
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={wasteType}>
        <Paper
          elevation={3}
          sx={{ 
            p: 2, 
            borderRadius: 2, 
            textAlign: 'center', 
            cursor: 'pointer', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '350px' // Ensures all cards have the same height
          }}
          onClick={() => handleCardClick(wasteType)}
        >
          <Box 
            component="img"
            src={image} 
            alt={title} 
            sx={{ 
              width: '100%', 
              height: '150px', // Sets a consistent height for the image
              objectFit: 'cover', // Ensures the image covers the area without distortion
              borderRadius: '8px' // Optional: Adds border-radius for rounded corners
            }} 
          />
          <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    );
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" align="center" sx={{ mb: 4 }} fontSize={{ xs: '24px', sm: '32px', md: '38px', lg: '46px' }}>
        Know Your Waste
      </Typography>
      
      {selectedWaste ? (
        <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
            {wasteData[selectedWaste].title}
          </Typography>
          <Box 
            component="img"
            src={wasteData[selectedWaste].image} 
            alt={wasteData[selectedWaste].title} 
            sx={{ 
              width: '300px', 
              height: '150px', // Consistent height for detailed view
              objectFit: 'cover', 
              mb: 2 
            }} 
          />
          <Typography variant="body1" sx={{ mb: 2 }}>
            {wasteData[selectedWaste].description}
          </Typography>
          <Button variant="contained" onClick={() => setSelectedWaste(null)}>Back to Grid</Button>
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {Object.keys(wasteData).map(renderCard)}
        </Grid>
      )}
    </Box>
  );
}

export default WasteDisposal;
