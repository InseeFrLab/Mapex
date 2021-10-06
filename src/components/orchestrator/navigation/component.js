import React from 'react';
import { makeStyles } from '@material-ui/core';
import ButtonUI from 'components/common/button';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'whitesmoke',
		bottom: 0,
		left: 0,
		top: 'auto',
		width: '100%',
		position: 'fixed',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex: '0 0 auto',
		borderTop: '1px solid grey',
		paddingTop: '3px',
		paddingBottom: '2px',
	},
	navButton: {
		'&:last-child': {
			marginRight: '5px',
			marginLeft: '5px',
		},
	},
}));

const Navigation = ({
	isFirstPage,
	goPrevious,
	goNext,
	isLastPage,
}) => {
	const classes = useStyles();

	return (
		<CardActions>
			<div className="pagination">
				<ButtonUI
					onClick={goPrevious}
					disabled={isFirstPage}
					label="Previous"
				/>
				<ButtonUI onClick={goNext} disabled={isLastPage} label="Next" />
			</div>
		</CardActions>
	);
};

export default Navigation;
