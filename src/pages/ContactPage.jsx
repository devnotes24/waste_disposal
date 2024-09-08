import { Box, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import ContactMail from '@mui/icons-material/ContactMail';
import LocationOn from '@mui/icons-material/LocationOn';

function ContactPage() {
  const address = "#23, 1st Main, 3rd Cross, Kuvempunagara, Bengaluru - 560019.";
  const googleMapsUrl = `https://www.google.com/maps/search/1st+Main,+3rd+Cross,+Kuvempunagara,+Bengaluru+-+560019./@13.0700857,77.5395393,18.46z?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`;

  return (
    <Box
      sx={{
        mb: 4,
        mt: { xs: 2, sm: 3, md: 6 },
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
          fontSize: { xs: '30px', sm: '45px', md: '52px', lg: '64px' }
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
              m: 2,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{ mb: 2, fontSize: { xs: '20px', sm: '35px', md: '42px' } }}
            >
              Get in Touch
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <Typography sx={{ fontSize: { xs: '24px', sm: '30px', md: '30px' }, textAlign: 'center' }}>
                        <Box sx={{ mr: 1 }}><ContactMail /></Box>{"ecosort3@gmail.com"}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <Typography
                        sx={{ fontSize: { xs: '24px', sm: '30px', md: '30px' }, textAlign: 'center' }}
                      >
                        <Box sx={{ mr: 1 }}><LocationOn /></Box>
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                          {address}
                        </a>
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactPage;
