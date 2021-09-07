import React, { useState, useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Item from '../item';
import D from 'dictionary/app/order-filter';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// TODO -> Include checkbox labels into dictionnary

const Order = ({ value, setValue }) => {
	// const onChange = (e) => {
	// 	const params = new URLSearchParams();
	// 	params.append('order', query);
	// 	setQuery(e.target.value);
	// 	history.push({ search: params.toString() });
	// };

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<Item title={D.orderLabel}>
			<FormGroup row>
				<RadioGroup
					aria-label="gender"
					name="gender1"
					value={value}
					onChange={handleChange}
				>
					<FormControlLabel
						value="remainingDay"
						control={<Radio />}
						label="Jours restants"
					/>
					<FormControlLabel
						value="priority"
						control={<Radio />}
						label="Priorité"
					/>
					<FormControlLabel
						value="survey"
						control={<Radio />}
						label="Enquête"
					/>
					<FormControlLabel
						value="sample"
						control={<Radio />}
						label="Sous-échantillon"
					/>
					<FormControlLabel value="name" control={<Radio />} label="Nom" />
					<FormControlLabel value="city" control={<Radio />} label="Ville" />
					<FormControlLabel
						value="state"
						control={<Radio />}
						label="État de l'UE"
					/>
				</RadioGroup>
			</FormGroup>
		</Item>
	);
};

export default Order;
