import React from 'react';
import SurveyUnitCard from './component';

export default {
	title: 'Components/SurveyUnitCard',
	component: SurveyUnitCard,
};

const Template = (args) => <SurveyUnitCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
