import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { TextField, Typography } from '@material-ui/core';


import Notif from './Notif'
import Banner from './Banner';
import MapLeaflet from './MapLeaflet';
import Section from './Section';


const useStyles = makeStyles((theme) => ({

  TextCorpSection: {
    color: '#808080',
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1, 1),
    background: theme.palette.primary.main,
    color: 'white',
    '&:hover,&:focus': {
      backgroundColor: theme.palette.primary.dark,

    },
  },
  TextField: {
    marginRight: theme.spacing(1)
  },
  layout: {
    width: 'auto',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(1),
    },
  },
  section1: {
    margin: theme.spacing(2),
  },

  section3: {
    margin: theme.spacing(0.5, 1, 2, 0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  map: {
    width: '100%',
  },

}));

function App() {
  const classes = useStyles();
  const [position, setPosition] = useState([51.505, -0.09]);

  return (
    <div >
      <Banner />

      <main className={classes.layout}>

        <Paper className={classes.paper}>
          <div className={classes.section1}>
            <Button variant="outlined" color="primary" startIcon={<HomeIcon />}>
              Ajouter l'application à l'écran d'accueil
            </Button>
          </div>

          <Section title="Recevoir une notification :" >
            <Notif classes={classes} />
          </Section>


          <Section title="Téléphoner :" >
            <Typography className={classes.TextCorpSection}> Au </Typography>
            <TextField variant="outlined" label="06 ou 07 XX XX XX XX" size="small" type="tel" />
            <Button className={classes.button}>Appeler</Button>
          </Section>

          <Section title="Se géolocaliser :" >
            <MapLeaflet position={position} />
            <Button className={classes.button}>Trouvez moi</Button>
          </Section>

          <Section title="Itinéraire :" >
            <TextField className={classes.TextField} id="itineraire" label="Adresse" variant="outlined" color="secondary" type="string" size="small" />
            <Button className={classes.button}>Y aller</Button>
          </Section>

          <Section title="Agenda :" >
            <TextField className={classes.TextField} id="nom-agenda" variant="outlined" label="Nom du rendez-vous" color="secondary" type="text" size="small" />
            <TextField className={classes.TextField} id="date-agenda" variant="outlined" color="secondary" size="small" type="date" />
            <Typography className={classes.TextCorpSection}> De </Typography>
            <TextField className={classes.TextField} id="heure-debut" variant="outlined" color="secondary" size="small" type="time" />
            <Typography className={classes.TextCorpSection}> à </Typography>
            <TextField className={classes.TextField} id="heure-fin" variant="outlined" color="secondary" size="small" type="time" />
            <Button className={classes.button}>Ajouter</Button>
          </Section>


        </Paper>

      </main>
    </div>
  );
}

export default App;
