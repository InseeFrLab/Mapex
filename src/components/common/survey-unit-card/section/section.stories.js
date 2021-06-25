import React from 'react';
import Section from './component';

export default {
	title: 'Components/Section',
	component: Section,
};

const Template = (args) => <Section {...args} />;

export const Default = Template.bind({});

Default.args = {
	title: 'Titre',
	children: null,
};
