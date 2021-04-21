import {useState} from 'react';

import Section from './Section';

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Itineraire = ({classes}) => {
    const [adresse, setAdresse] = useState();

    return (
        <Section title="Itinéraire :" >
            <TextField value={adresse} className={classes.TextField} id="itineraire" label="Adresse" variant="outlined" color="secondary" type="string" size="small" 
            onChange={e => setAdresse(e.target.value)}/>
            <Button href={`https://maps.google.com/?q=${adresse}`}className={classes.button}>Y aller</Button>
        </Section>
    )
}

export default Itineraire;