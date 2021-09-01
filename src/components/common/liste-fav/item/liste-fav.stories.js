import React from 'react';
import ItemFavorite from './component';

export default {
	title: 'Components/Favorite/ItemFavorite',
	component: ItemFavorite,
};

const Template = (args) => <ItemFavorite {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: 'Mes Favoris <3',
	nbUE: 5,
};
