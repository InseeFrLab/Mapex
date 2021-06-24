import React from 'react';
import Note from './component';

export default {
	title: 'Components/SectionNote',
	component: Note,
};

const Template = (args) => <Note {...args} />;

export const Default = Template.bind({});

Default.args = {};
