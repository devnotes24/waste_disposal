// src/components/DevelopersInfo.jsx

import { Container, Typography, Grid, Card, CardContent, CardMedia} from '@mui/material';
import { makeStyles } from '@mui/styles';

// Styles for the component
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {  
    height: 200,
  },
  cardContent: {
    textAlign: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  description: {
    fontStyle: 'italic',
  },
}));

const developers = [
  {
    name: 'Bhuvan friend1',
    role: 'Frontend Developer (React)',
    description: 'Responsible for developing the user interface and ensuring a smooth user experience.',
    image: 'https://via.placeholder.com/345x200?text=React+Developer', // Replace with actual image URL
  },
  {
    name: 'Bhuvan',
    role: 'Database Developer (MongoDB)',
    description: 'Handles database design, management, and ensures efficient data storage and retrieval.',
    image: 'https://via.placeholder.com/345x200?text=MongoDB+Developer', // Replace with actual image URL
  },
  {
    name: 'Bhuvan friend2',
    role: 'Backend Developer (Node.js & API)',
    description: 'Develops and maintains server-side logic and APIs, ensuring smooth backend operations.',
    image: 'https://via.placeholder.com/345x200?text=Node.js+Developer', // Replace with actual image URL
  },
];

const DevelopersInfo = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom align="center">
        Meet the Developers
      </Typography>
      <Grid container spacing={4}>
        {developers.map((dev, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                className={classes.media}
                image={dev.image}
                alt={dev.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.name}>
                  {dev.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {dev.role}
                </Typography>
                <Typography variant="body2" className={classes.description}>
                  {dev.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DevelopersInfo;
