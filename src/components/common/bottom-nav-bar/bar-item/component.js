import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const BarItem = ({ label, icon, showLabel }) => (
	<BottomNavigationAction label={label} icon={icon} showLabel={showLabel} />
);

BarItem.propTypes = {
	/**
	 * Label of the item
	 */
	label: PropTypes.string,
	/**
	 * Icon of the item
	 */
	icon: PropTypes.element,
};

BarItem.defaultProps = {
	content: [],
	value: '',
};

export default BarItem;
