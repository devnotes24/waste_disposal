import { useState } from 'react';
import { Box, Typography, Select, MenuItem, Paper, Grid, Avatar, Divider } from '@mui/material';
import wasteData from '../../public/wasteData';

function WasteDisposal() {
  const [selectedWaste, setSelectedWaste] = useState('Organic');

  const handleChange = (event) => {
    setSelectedWaste(event.target.value);
  };

  const { image, title, description } = wasteData[selectedWaste];

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h2" align="center" sx={{ mb: 4 }}>
        Waste Disposal Information
      </Typography>

      <Select
        value={selectedWaste}
        onChange={handleChange}
        sx={{ mb: 4, width: '100%', maxWidth: 400, mx: 'auto', display: 'block' }}
      >
        {Object.keys(wasteData).map((wasteType) => (
          <MenuItem key={wasteType} value={wasteType}>
            {wasteType}
          </MenuItem>
        ))}
      </Select>

      <Paper elevation={6} sx={{ p: 3, borderRadius: 2, textAlign: 'center', maxWidth: 600, width: '100%' }}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Avatar src={image} alt={title} sx={{ width: 150, height: 150, mx: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1">{description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default WasteDisposal;
