import React from 'react';
import UE from './component';

export default {
	title: 'Components/UE',
	component: UE,
};

const Template = (args) => <UE {...args} />;

export const Default = Template.bind({});
Default.args = {};
