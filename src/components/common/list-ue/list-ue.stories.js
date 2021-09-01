import React from 'react';
import ListUE from './component';
import { contentUeDemo, contentUeSoft } from 'data-mock';

export default {
	title: 'Components/ListUE',
	component: ListUE,
};

const Template = (args) => <ListUE {...args} />;

export const Minimale = Template.bind({});
Minimale.args = {
	contentUE: contentUeSoft,
	Component: ({ children }) => <>{children}</>,
};

export const Demo = Template.bind({});

Demo.args = {
	contentUE: contentUeDemo,
	Component: ({ children }) => <>{children}</>,
};
