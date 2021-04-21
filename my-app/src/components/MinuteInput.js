import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const MinuteInput = ({classes})=> {
  const innerClasses = useStyles();
  return(
    <div className={ innerClasses.row}>
              <Typography className={classes.TextCorpSection}> Dans  </Typography>
              <TextField className={classes.TextField} id="notif-minutes" variant="outlined" InputProps={{ inputProps: { min: 1 } }} color="secondary" type="number" size="small" defaultValue={1} />
              <Typography className={classes.TextCorpSection}> minute(s) </Typography>
    </div>
  )
}

export default MinuteInput;