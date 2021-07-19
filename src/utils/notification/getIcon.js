import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const getIcon = (labelIcon) => {
	switch (labelIcon) {
		case 'addSurveyUnit':
			return <GroupAddIcon />;
		case 'important':
			return <NotificationImportantIcon />;
		default:
			return <NotificationsIcon />;
	}
};
