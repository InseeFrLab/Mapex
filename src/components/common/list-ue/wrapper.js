import React from 'react';
import { Link } from 'react-router-dom';
import ListUE from './component';

const Wrapper = ({ contentUE }) => (
	<ListUE contentUE={contentUE} Component={Link} />
);

export default Wrapper;
