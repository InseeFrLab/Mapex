import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    }
}));

const Banner = ()=> {
  const classes = useStyles();
  return(
    <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Application Minimale
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Banner;