import React from 'react';
import ButtonUI from './component';

export default {
	title: 'Components/Button',
	component: ButtonUI,
};

const Template = (args) => <ButtonUI {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
	color: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};
