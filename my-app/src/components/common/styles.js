import { makeStyles } from '@material-ui/core/styles';

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
      marginRight: theme.spacing(2)
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

  export default useStyles;