import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Item from '../item';
import D from 'dictionary/app/order-filter';

const Survey = ({ campaigns, state, setState }) => {
	const handleChange = (event) => {
		setState({ ...state, [event.target.value]: event.target.checked });
	};

	return (
		<Item title={D.surveyLabel}>
			<FormGroup row>
				{campaigns.map((label) => {
					return (
						<FormControlLabel
							control={<Checkbox checked={state[label]} />}
							label={label}
							value={label}
							onChange={handleChange}
						/>
					);
				})}
			</FormGroup>
		</Item>
	);
};

export default Survey;
