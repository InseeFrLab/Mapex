import React from 'react';
import UE from './component';

export default {
	title: 'Components/UE',
	component: UE,
};

const Template = (args) => <UE {...args} />;

const mock = {
	firstName: 'Camille',
	lastName: 'Backer',
	phone: '0600000000',
	street: "1 Rue de l'église",
	zipCity: '59 000 Lille',
	idCampaign: 'log-2020-x00',
	isFavorite: false,
};

export const Default = Template.bind({});
Default.args = { ...mock };
