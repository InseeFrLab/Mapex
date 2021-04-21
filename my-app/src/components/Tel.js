import { useState } from 'react';
import Section from './Section';

import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Telephoner = ({ classes }) => {
    const regexTel = /^(?:(?:(?:\+|00)33\D?(?:\D?\(0\)\D?)?)|0){1}[1-9]{1}(?:\D?\d{2}){4}$/s;
    const [tel, setTel] = useState("");
    const [telCorrect, setTelCorrect] = useState(false);


      const handleChange = (e) => {
        setTel(e.target.value);
        setTelCorrect(regexTel.test(e.target.value));
    }
    return(
        <Section title="Téléphoner :" >
            <Typography className={classes.TextCorpSection}> Au </Typography>
            <TextField value={tel} type="tel" variant="outlined" label="06 ou 07 XX XX XX XX" 
            size="small" onChange={handleChange}/>
            <Button href={`tel:${tel}`} disabled={!telCorrect} className={classes.button}>
                Appeler
            </Button>

        </Section>
    )
}

export default Telephoner;