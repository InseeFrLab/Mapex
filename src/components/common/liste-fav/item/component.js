import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GroupIcon from '@material-ui/icons/Group';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const ItemFavorite = ({ title, UE }) => {
	return (
		<Card>
			<CardActionArea component={Link} to={`/?favorites=${title}`}>
				<CardContent>
					<Typography>
						{title}
						<Divider variant="left" />
					</Typography>
					<ListItem disableGutters>
						<ListItemIcon>
							<GroupIcon color="action" />
						</ListItemIcon>
						<ListItemText secondary={`${UE.length} Unités d'enquête`} />
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
	 * Survey unit in the favorite list
	 */
	UE: PropTypes.array,
};

export default ItemFavorite;
