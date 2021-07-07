import React from 'react';
import OtherContact from './component';

export default {
	title: 'Components/Section/OtherContact',
	component: OtherContact,
};

const Template = (args) => <OtherContact {...args} />;

export const Default = Template.bind({});

Default.args = {};
