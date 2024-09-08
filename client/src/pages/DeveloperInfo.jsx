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
    name: 'Bhuvan K R Bharadwaj',
    role: 'MongoDB',
    description: 'Handles database design, management, and ensures efficient data storage and retrieval.',
    image: 'data:image/png;base64,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', // Replace with actual image URL
  },
  {
    name: 'Gowri C P',
    role: 'Node.js and Express',
    description: 'Develops and maintains server-side logic and APIs, ensuring smooth backend operations.',
    image: 'data:image/png;base64,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', // Replace with actual image URL
  },
  {
    name: 'Kavan H M',
    role: 'React',
    description: 'Responsible for developing the user interface and ensuring a smooth user experience.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuRfraqaQDDKWFfFyvN01zttd1K0WPUkX2v5s8-lGGMzheoc1nuSFgsHjLXfBWEBTzcA&usqp=CAU', // Replace with actual image URL
  },
];

const DevelopersInfo = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" sx={{fontSize : {sx : "24px" , sm : "32px" , md : "40px" , lg : "48px"}}} gutterBottom align="center">
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
                <Typography variant="h6" sx={{mb : 1 , fontSize : {sx : "16px" , sm : "18px" , md : "20px" , lg : "24px"}}} className={classes.name}>
                  {dev.name}
                </Typography>
                <Typography variant="subtitle1" sx={{mb : 1 , fontSize : {sx : "16px" , sm : "18px" , md : "20px" , lg : "24px"}}} color="textSecondary">
                  {dev.role}
                </Typography>
                <Typography variant="body2" sx={{mb : 2 , fontSize : {sx : "13px" , sm : "16px" , md : "18px"}}} className={classes.description}>
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
