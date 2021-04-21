import { useState } from 'react';

import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Section from './Section'


const useStyles = makeStyles((theme) => ({
    row: {
      display: 'flex',
      flexWrap: 'no-wrap',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));

const Notif = ({ classes }) => {
const [number, setNumber] = useState(1);
    const innerClasses = useStyles();

    function displayNotification(title, text) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title);
        });
    }

    const setNotification = () => {
        const title = "Test Notification Title";
        const text = 'Première notification';

        if (!('Notification' in window)) {
            alert('Ce navigateur ne prend pas en charge la notification de bureau')
        }
        else if (Notification.permission === 'granted') {
            // Si tout va bien, créons une notification
            // makeNotification(title, text);
            displayNotification(title, text)
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                // Si l'utilisateur accepte, créons une notification
                if (permission === 'granted') {
                    // makeNotification(title, text);
                    displayNotification(title, text)
                }
            })
        }

    }

    return (
        <Section title="Recevoir une notification :" >
            <div className={ innerClasses.row}>
              <Typography className={classes.TextCorpSection}> Dans  </Typography>
              <TextField className={classes.TextField} value={number} variant="outlined" InputProps={{ inputProps: { min: 1 } }} 
              onChange={e => setNumber(e.target.value)}
              color="secondary" type="number" size="small" />
              <Typography className={classes.TextCorpSection}> minute(s) </Typography>
            </div>
            <Button onClick={setNotification} className={classes.button} >Me notifier</Button>
        </Section>

    )
}

export default Notif;