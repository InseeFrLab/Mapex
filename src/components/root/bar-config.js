import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import D from 'dictionary/storybook';

export const navConfig = [
	{ id: 'home', value: '/', label: D.home, icon: <HomeIcon /> },
	{
		id: 'favorite',
		value: '/favoris',
		label: D.favorite,
		icon: <FavoriteIcon />,
	},
	{
		id: 'notifications',
		value: '/notifications',
		label: D.notification,
		icon: <NotificationsIcon />,
	},
];
