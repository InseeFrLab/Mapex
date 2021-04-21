import { useState, useRef, useEffect } from "react";
import { googleCalendarEventUrl } from 'google-calendar-url';

import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Section from './Section'

const Agenda = ({classes}) => {
    const [nomEvenement, setNomEvenement] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(startDate)
    const [errorValidation, setErrorValisation] = useState(false);
    const firstUpdate = useRef(true);

    useEffect(() => {
        const validFormat = () => {
            let formIsValid = true;

            if (!nomEvenement) {
                formIsValid = false;
            }
            if (startDate > endDate) {
                formIsValid = false;
            }
            return formIsValid;
        }
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        else {
            setErrorValisation(!validFormat())
        }
    },[nomEvenement, startDate, endDate]);

    const makeUrl = () => {

        const formattedStart = startDate.toISOString().replace(/-/g, '').replace(/:/g, '').replace('.000', '').substr(0, 15);
        const formattedEnd = endDate.toISOString().replace(/-/g, '').replace(/:/g, '').replace('.000', '').substr(0, 15);

        const url = googleCalendarEventUrl({
            start: formattedStart,
            end: formattedEnd,
            title: nomEvenement,
            details: 'DETAILS',
            location: 'LOCATION',
        });
        return url;
    }

    return(
        <Section title="Agenda :" >
            <TextField value={nomEvenement} className={classes.TextField} onChange={e => setNomEvenement(e.target.value)}
             id="nom-agenda" variant="outlined" label="Nom du rendez-vous" color="secondary" type="text" size="small" />
            <TextField className={classes.TextField} id="heure-debut" 
            variant="outlined" color="secondary" size="small" 
            type="datetime-local" label="Date de début" InputLabelProps={{
                shrink: true,
              }}
            value={startDate.toISOString().slice(0,16)} onChange={e => setStartDate(new Date(e.target.value))}/>
            <TextField className={classes.TextField} id="heure-fin" 
            variant="outlined" color="secondary" size="small"  label="Date de fin"
            type="datetime-local" InputLabelProps={{
                shrink: true,
              }}
            value={endDate.toISOString().slice(0,16)} onChange={e => setEndDate(new Date(e.target.value))}/>
            <Button className={classes.button} href={makeUrl()} disabled={firstUpdate.current || errorValidation}>Ajouter</Button>
            <Typography className={classes.TextField} hidden={!errorValidation}>Renseignements incorrects</Typography>
          </Section>
    )


}
export default Agenda;