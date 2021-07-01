import React from 'react';
import Phone from './component';

export default {
	title: 'Components/Section/Phone',
	component: Phone,
};

const Template = (args) => <Phone {...args} />;

export const Default = Template.bind({});

Default.args = {};
