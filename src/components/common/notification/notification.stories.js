import React from 'react';
import Notification from './component';
import { dataNotif } from 'data-mock';

export default {
	title: 'Components/NotificationsScreen',
	component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	dataNotifications: dataNotif,
};
