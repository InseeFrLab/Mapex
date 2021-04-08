import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MinuteInput from './MinuteInput';


const Notif = ({ classes }) => {

    return (
        <>
            <MinuteInput classes={classes} />
            <Button className={classes.button} >Me notifier</Button>
        </>

    )
}

export default Notif;