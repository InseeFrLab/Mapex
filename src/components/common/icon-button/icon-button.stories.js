import React from 'react';
import ButtonIcon from './component';
import SearchIcon from '@material-ui/icons/Search';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

export default {
	title: 'Components/ButtonIcon',
	component: ButtonIcon,
};

const Template = (args) => <ButtonIcon {...args} />;

export const ButtonIconHome = Template.bind({});
ButtonIconHome.args = {
  icon: <HomeIcon />,
};
export const ButtonIconSearch = Template.bind({});
ButtonIconSearch.args = {
  icon: <SearchIcon />,
};
export const ButtonIconPhone = Template.bind({});
ButtonIconPhone.args = {
  icon: <PhoneIcon />,
};