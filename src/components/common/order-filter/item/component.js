import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	item: {},
}));

const Item = ({ title, children }) => {
	const classes = useStyles();
	return (
		<List
			subheader={
				<ListSubheader color="inherit">
					<Typography>{title}</Typography>
				</ListSubheader>
			}
		>
			<ListItem className={classes.item}>{children}</ListItem>
		</List>
	);
};

export default Item;
