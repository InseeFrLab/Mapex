import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    TextTitleSection: {
        fontWeight: 'bold',
        color: '#0080ff',
        textAlign: 'left'
    },
}));

const SectionTitle = ({ title }) => {

    const classes = useStyles();

    return (
        <Typography className={classes.TextTitleSection}>{title}</Typography>

    )
}

export default SectionTitle;