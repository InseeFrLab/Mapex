import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Item from '../item';
import D from 'dictionary/app/order-filter';

// TODO -> Include checkbox labels into dictionnary

const FavoriteFilter = ({ favorites, state, setState }) => {
	const handleChange = (event) => {
		setState({ ...state, [event.target.value]: event.target.checked });
	};
	console.log(`State favorite ${JSON.stringify(state)}`);
	return (
		<Item title={D.favoriteLabel}>
			<FormGroup column>
				{favorites.map(({ label }) => {
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

export default FavoriteFilter;
