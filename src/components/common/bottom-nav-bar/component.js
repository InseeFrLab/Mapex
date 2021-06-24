import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BarItem from './bar-item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
	},
}));

const BottomBar = ({
	content,
	currentValue,
	className,
	handleChange,
	showLabel,
}) => {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<BottomNavigation
				value={currentValue}
				onChange={handleChange}
				className={className}
				showLabel={showLabel}
			>
				{content.map(({ id, label, icon, value }) => (
					<BarItem
						key={id}
						value={value}
						label={label}
						icon={icon}
						showLabel={showLabel}
						onChange={handleChange}
					/>
				))}
			</BottomNavigation>
		</Paper>
	);
};

BottomBar.propTypes = {
	/**
	 * Content of the BottomBar
	 */
	content: PropTypes.array,
	/**
	 * Selected value
	 */
	value: PropTypes.string,
	/**
	 * Classname of the BottomBar
	 */
	className: PropTypes.string,
	/**
	 * Handler for BottomBar items
	 */
	handleChange: PropTypes.func,
	/**
	 * BottomBar items has to be shown or not
	 */
	showLabel: PropTypes.bool,
};

BottomBar.defaultProps = {
	content: [],
	value: '',
	className: '',
	handleChange: () => {},
	showLabel: true,
};

export default BottomBar;
