import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Item from '../item';
import D from 'dictionary/components/common/order-filter/order-filter';

// TODO -> Include checkbox labels into dictionnary

const Priority = () => {
	return (
		<Item title={D.priorityLabel}>
			<FormGroup row>
				<FormControlLabel control={<Checkbox defaultChecked />} label="Oui" />
			</FormGroup>
		</Item>
	);
};

export default Priority;
