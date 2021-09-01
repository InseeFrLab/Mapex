import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GroupIcon from '@material-ui/icons/Group';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const ItemFavorite = ({ title, nbUE }) => {
	return (
		<Card>
			<CardActionArea>
				<CardContent>
					<Typography>
						{title}
						<Divider variant="left" />
					</Typography>
					<ListItem disableGutters>
						<ListItemIcon>
							<GroupIcon color="action" />
						</ListItemIcon>
						<ListItemText secondary={`${nbUE} Unités d'enquête`} />
					</ListItem>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

ItemFavorite.propTypes = {
	/**
	 * title of the favorite list
	 */
	title: PropTypes.string,
	/**
	 * Nb of survey unit in the favorite list
	 */
	nbUE: PropTypes.number,
};

export default ItemFavorite;
