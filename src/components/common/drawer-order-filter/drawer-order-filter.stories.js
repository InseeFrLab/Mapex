import React, { useState } from 'react';
import DrawerOrderFilter from './component';
import ButtonUI from '../button';

const Test = ({ campaigns }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<ButtonUI onClick={() => setIsOpen((o) => !o)} label="Open Modal" />
			<DrawerOrderFilter
				open={isOpen}
				setOpen={setIsOpen}
				campaigns={campaigns}
			/>
		</>
	);
};

export default {
	title: 'Components/DrawerOrderFilter',
	component: Test,
};

const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {
	campaigns: ['Campaign1', 'Campaign2'],
};
