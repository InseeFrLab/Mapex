import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Notif from './Notif'
import Banner from './Banner';

import Telephoner from './Tel';
import Geoloc from './Geoloc'
import Itineraire from './Itineraire';
import Agenda from './Agenda';
import InstallPWA from './InstallPWA';

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
    margin: theme.spacing(1, 1),
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

  return (
    <div >
      <Banner />

      <main className={classes.layout}>

        <Paper className={classes.paper}>
          <div className={classes.section1}>
            <InstallPWA />
          </div>
          <Notif classes={classes} />
          <Telephoner classes={classes} />
          <Geoloc classes={classes} />
          <Itineraire classes={classes} />
          <Agenda classes={classes} />

        </Paper>

      </main>
    </div>
  );
}

export default App;
