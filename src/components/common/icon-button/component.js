import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

const ButtonIcon = ({
	icon,
	classes,
	color,
	disabled,
	onClick,
	target,
	...props
}) => {
	return (
		<IconButton
			className={classes}
			color={color}
			onClick={onClick}
			disabled={disabled}
			target={target}
			{...props}
		>
			{icon}
		</IconButton>
	);
};

ButtonIcon.propTypes = {
	/**
	 * Icon of the button
	 */
	icon: PropTypes.element,
	/**
	 * Classname of the ButtonIcon
	 */
	className: PropTypes.string,
	/**
	 * The color to use
	 */
	color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
	/**
	 * Handler for BottomBar items
	 */
	 onClick: PropTypes.func,
	/**
	 * ButtonIcon has to be disabled or not
	 */
	disabled: PropTypes.bool,
	/**
	 * target
	 */
	target: PropTypes.string,
};

ButtonIcon.defaultProps = {
	icon: null,
	className: '',
	color: 'default',
	target: '_blank',
	onClick: () => {},
};

export default ButtonIcon;
