import React from 'react';
import ListUE from './component';
import { listUE } from 'data-mock';

export default {
	title: 'Components/ListUE',
	component: ListUE,
};

const Template = (args) => <ListUE {...args} />;

export const Default = Template.bind({ content: listUE });
Default.args = {};
