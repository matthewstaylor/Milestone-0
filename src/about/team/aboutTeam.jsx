import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import g12logo from "./assets/img/g12-logo.png";
import { Image } from "react-bootstrap";
import nazikPhoto from "../nazik/assets/img/nazik.jpg";
import josePhoto from "../jose/assets/images/profilePic.jpg";
import mattPhoto from "../matt/assets/images/Matthew201909.jpg";
import dhavalPhoto from "../dhaval/assets/images/dhaval.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Group 12
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

// Members in an alphabetical order
const cards = [
  {
    imgSource: nazikPhoto,
    heading: "Nazik Almazova",
    desription: "Junior in Computer Science",
    link:
      "https://lamp.cse.fau.edu/~cen4010fal19_g12/the_victors/nazik/index.html",
    key: 1
  },
  {
    imgSource: josePhoto,
    heading: "Jose Quesada",
    desription:
      "Double majoring in Computer Engineering and Computer Science at FAU. Music performance and production is a strong secondary passion of mine.",
    link:
      "https://lamp.cse.fau.edu/~cen4010fal19_g12/the_victors/jose/index.html",
    key: 3
  },
  {
    imgSource: dhavalPhoto,
    heading: "Dhaval Shirvi",
    desription: "Student in Computer Science",
    link:
      "https://lamp.cse.fau.edu/~cen4010fal19_g12/the_victors/dhaval/index.html",
    key: 4
  },
  {
    imgSource: mattPhoto,
    heading: "Matthew Taylor",
    desription:
      "Rising junior Computer Science student at Florida Atlantic University.",
    link:
      "https://lamp.cse.fau.edu/~cen4010fal19_g12/the_victors/matt/index.html",
    key: 2
  }
];

export default function Team() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Image
            src={g12logo}
            rounded
            style={{ height: "50px", paddingRight: "7px" }}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Group 12
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to The Victors.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Thank you for visiting our group. Check out our individual pages.
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.key} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imgSource}
                    title="Image title"
                    height="60px"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>{card.desription}</Typography>
                  </CardContent>
                  <CardActions container justify="center">
                    <Button href={card.link}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Group 12
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Homepage. More to come!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
