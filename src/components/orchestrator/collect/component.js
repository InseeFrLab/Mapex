import React from 'react';
import Orchestrator from '../orchestrator';

const Collect = ({ source, data = {}, pagination }) => {
	const { COLLECTED, ...dataForCollect } = data;
	async function suggesterFetcher(url) {
		const response = await fetch(url, {
			headers: { Accept: 'application/json' },
		});
		return response;
	}
	return (
		<Orchestrator
			savingType={'COLLECTED'}
			preferences={['COLLECTED']}
			features={['VTL']}
			source={source}
			data={dataForCollect}
			tooltip={false}
			pagination={pagination}
			writable
			suggesters={{
				'naf-rev2': {
					url: 'https://inseefr.github.io/Lunatic/storybook/naf-rev2.json',
				},
			}}
			suggesterFetcher={suggesterFetcher}
			autoSuggesterLoading
		/>
	);
};

export default Collect;
