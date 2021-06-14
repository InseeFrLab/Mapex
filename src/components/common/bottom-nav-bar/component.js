import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BarItem from './bar-item';

const BottomBar = ({ content, value, className, handleChange, showLabels }) => {
	return (
		<BottomNavigation
			value={value}
			onChange={handleChange}
			className={className}
			showLabels={showLabels}
		>
			{content.map(({ id, label, icon }) => (
				<BarItem key={id} label={label} icon={icon} />
			))}
		</BottomNavigation>
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
	showLabels: PropTypes.bool,
};

BottomBar.defaultProps = {
	content: [],
	value: '',
	className: '',
	handleChange: () => {},
	showLabels: false,
};

export default BottomBar;
