import React from 'react';
import OrderFilter from './component';

export default {
	title: 'Components/OrderFilter',
	component: OrderFilter,
};

const Template = (args) => <OrderFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
	campaigns: ['Campaign1', 'Campaign2'],
};
