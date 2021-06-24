import React from 'react';
import ListUE from './component';

export default {
	title: 'Components/ListUE',
	component: ListUE,
};

const Template = (args) => <ListUE {...args} />;

export const Default = Template.bind({});
Default.args = {};
