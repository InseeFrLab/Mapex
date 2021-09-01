import React from 'react';
import ListeFavorite from './component';
import { dataFavorite } from 'data-mock/favorite';
export default {
	title: 'Components/Favorite',
	component: ListeFavorite,
};

const Template = (args) => <ListeFavorite {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	dataFavorite: dataFavorite,
};
