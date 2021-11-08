import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import logoMapex from './logoMapex.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
	},
	colorPrimary: {
		backgroundColor: '#FF780A',
	},
	barColorPrimary: {
		backgroundColor: '#B2DFDB',
	},
	imgBlock: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		maxWidth: '500px',
		display: 'block',
	},
}));

const Loader = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<LinearProgress
				classes={{
					colorPrimary: classes.colorPrimary,
					barColorPrimary: classes.barColorPrimary,
				}}
			/>
			<div className={classes.imgBlock}>
				<img src={logoMapex} className={classes.img} alt="logo" />
			</div>
		</div>
	);
};

export default Loader;
