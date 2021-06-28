import React from 'react';
import SurveyUnitCard from './component';
import { MemoryRouter, Route} from "react-router-dom"

export default {
	title: 'Components/SurveyUnitCard',
	component: SurveyUnitCard,
	decorators: [(Story) => (
		<MemoryRouter initialEntries={["/11"]}>
				<Route path="/:id">
						<SurveyUnitCard />
				</Route>
		</MemoryRouter>)],
};

const Template = (args) => <SurveyUnitCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
