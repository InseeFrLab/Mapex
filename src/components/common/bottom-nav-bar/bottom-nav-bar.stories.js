import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BottomBar from './component';
import D from '../../../dictionary/storybook';

export default {
	title: 'Components/BottomBar',
	component: BottomBar,
};

const Template = (args) => <BottomBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	content: [
		{ id: 'home', label: D.home, icon: <HomeIcon /> },
		{ id: 'favorite', label: D.favorite, icon: <FavoriteIcon /> },
		{ id: 'notification', label: D.notification, icon: <NotificationsIcon /> },
	],
};
