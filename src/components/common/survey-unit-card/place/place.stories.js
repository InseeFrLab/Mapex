import React from 'react';
import Place from './component';

export default {
	title: 'Components/Section/Place',
	component: Place,
};

const Template = (args) => <Place {...args} />;

export const Default = Template.bind({});

Default.args = {};
