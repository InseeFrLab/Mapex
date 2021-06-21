import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import BottomNavBar from 'components/common/bottom-nav-bar';
import { navConfig } from './bar-config';

const Bar = () => {
	const { pathname } = useLocation();
	const { push } = useHistory();

	const handleChange = (_, v) => {
		push(v);
	};

	return (
		<BottomNavBar
			content={navConfig}
			handleChange={handleChange}
			currentValue={pathname}
		/>
	);
};

export default Bar;
