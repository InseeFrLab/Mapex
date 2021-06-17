import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonUI = ({
	label,
	className,
	color,
	disabled,
	size,
	variant,
	handleChange,
	...props
}) => {
	return (
		<Button
			className={className}
			color={color}
			onClick={handleChange}
			disabled={disabled}
			size={size}
			variant={variant}
			{...props}
		>
			{label}
		</Button>
	);
};

ButtonUI.propTypes = {
	/**
	 * Label of the button
	 */
	label: PropTypes.string,
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
	handleChange: PropTypes.func,
	/**
	 * ButtonIcon has to be disabled or not
	 */
	disabled: PropTypes.bool,
	/**
	 * Size of the button
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small']),
	/**
	 * The variant to use
	 */
	variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

ButtonUI.defaultProps = {
	label: '',
	className: '',
	color: 'default',
	handleChange: () => {},
	disable: false,
	size: 'medium',
	variant: 'contained',
};

export default ButtonUI;
