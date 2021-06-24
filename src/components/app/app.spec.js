import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './';

test('renders TODO', () => {
	render(<App />);
	const linkElement = screen.getByText(/TODO later/i);
	expect(linkElement).toBeInTheDocument();
});
