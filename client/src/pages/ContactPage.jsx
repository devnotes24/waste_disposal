import { Box, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import ContactMail from '@mui/icons-material/ContactMail';
import LocationOn from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';

const contactInfo = [
  { icon: <Phone />, text: '+1-234-567-890' },
  { icon: <ContactMail />, text: 'info@example.com' },
  { icon: <LocationOn />, text: '1234 Disposal St, City, Country' },
];

function ContactPage() {
  return (
    <Box
      sx={{
        mb: 4,
        mt: { xs: 2, sm: 3, md: 6},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{
          mb: 4,
          fontWeight: 'bold',
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 1,
              m : 2,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
              Get in Touch
            </Typography>
            <List>
              {contactInfo.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ mr: 1 }}>{item.icon}</Box>
                        {item.text}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactPage;
