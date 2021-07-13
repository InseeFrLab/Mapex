import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Item from '../item';
import D from 'dictionary/app/order-filter';


// TODO -> Include checkbox labels into dictionnary

const ListFavorite = () => {
	return (
		<Item title={D.favoriteLabel}>
			<FormGroup column>
				<FormControlLabel
					control={<Checkbox  />}
					label="Favoris 1"
				/>
				<FormControlLabel
					control={<Checkbox  />}
					label="Favoris 2"
				/>
				<FormControlLabel
					control={<Checkbox  />}
					label="Favoris 3"
				/>
			</FormGroup>
		</Item>
	);
};

export default ListFavorite;
