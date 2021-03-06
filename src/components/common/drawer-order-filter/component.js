import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import OrderFilter from '../order-filter/component';

const DrawerOrderFilter = ({
	campaigns,
	open,
	setOpen,
	favorites
}) => {
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	return (
		<SwipeableDrawer
			anchor={'bottom'}
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			disableBackdropTransition={!iOS}
			disableDiscovery={iOS}
		>
			<OrderFilter
				campaigns={campaigns}
				setOpen={setOpen}
				favorites={favorites}
			/>
		</SwipeableDrawer>
	);
};

DrawerOrderFilter.propTypes = {};

DrawerOrderFilter.defaultProps = {};

export default DrawerOrderFilter;
