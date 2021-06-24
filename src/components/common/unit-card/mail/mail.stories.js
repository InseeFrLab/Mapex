import React from 'react';
import Mail from './component';

export default {
	title: 'Components/SectionMail',
	component: Mail,
};

const Template = (args) => <Mail {...args} />;

export const Default = Template.bind({});

Default.args = {};
