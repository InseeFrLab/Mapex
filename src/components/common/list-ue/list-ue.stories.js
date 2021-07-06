import React from 'react';
import ListUE from './component';
import { contentUeDemo, contentUeSoft } from '../../../data-mock';

export default {
	title: 'Components/ListUE',
	component: ListUE,
};

const Template = (args) => <ListUE {...args} />;

export const Default = Template.bind({});
Default.args = {
	contentUE: contentUeSoft,
};

export const Demo = Template.bind({});

Demo.args = {
	contentUE: contentUeDemo,
};
