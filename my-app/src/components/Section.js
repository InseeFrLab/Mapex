import { Divider, makeStyles } from '@material-ui/core';
import SectionTitle from './SectionTitle';


const useStyles = makeStyles((theme) => ({
    section: {
        margin: theme.spacing(0.5, 1, 0.5, 0.5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    root: {
        margin: theme.spacing(1,2,0,2),
    }
}));


const Section = ({ title, children, divider = true }) => {
    const classes = useStyles();
    return (
        <>
            <Divider variant="middle" />
            <div className={classes.root}>
                <SectionTitle title={title} />
                <div className={classes.section}>
                    {children}
                </div>
            </div>
        </>

    )
}

export default Section;