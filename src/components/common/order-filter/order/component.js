import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Item from '../item';
import D from 'dictionary/app/order-filter';


// TODO -> Include checkbox labels into dictionnary

const Order = () => {
	return (
		<Item title={D.orderLabel}>
			<FormGroup row>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Priorité"
				/>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Enquête"
				/>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Sous-échantillon"
				/>
				<FormControlLabel control={<Checkbox defaultChecked />} label="Nom" />
				<FormControlLabel control={<Checkbox defaultChecked />} label="Ville" />
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="État de l'UE"
				/>
			</FormGroup>
		</Item>
	);
};

export default Order;
