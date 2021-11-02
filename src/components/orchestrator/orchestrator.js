import React from 'react';
import * as lunatic from '@inseefr/lunatic';
import { ListItem, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ButtonUI from 'components/common/button';
import Divider from '@material-ui/core/Divider';
import Navigation from './navigation';
import API from 'api';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		maxHeight: '100%',
		overflow: 'auto',
	},
	component: {
		padding: '20px',
		overflow: 'visible',
		marginBottom: '10px',
		'& *': { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
	},
	buttonValidate: {
		justifyContent: 'center',
		marginTop: '10px',
	},
}));

const Orchestrator = ({
	savingType,
	preferences,
	source,
	features,
	pagination = false,
	data,
	management,
	filterDescription,
	suggesters,
	autoSuggesterLoading,
	suggesterFetcher,
}) => {
	const {
		questionnaire,
		components,
		handleChange,
		bindings,
		pagination: {
			goNext,
			goPrevious,
			page,
			setPage,
			isFirstPage,
			isLastPage,
			flow,
		},
	} = lunatic.useLunatic(source, data, {
		savingType,
		preferences,
		features,
		management,
		pagination,
		suggesters,
		autoSuggesterLoading,
		suggesterFetcher,
	});

	const classes = useStyles();

	const displayComponents = function () {
		const structure = components.reduce((acc, curr) => {
			if (curr.componentType === 'Sequence') {
				acc[curr.id] = [];
				return acc;
			}
			if (curr.componentType === 'Subsequence') {
				acc[curr.id] = [];
				if (
					curr.hierarchy &&
					curr.hierarchy.sequence &&
					!!acc[curr.hierarchy.sequence.id]
				) {
					acc[curr.hierarchy.sequence.id].push(curr);
				}
				return acc;
			}
			if (
				curr.hierarchy &&
				curr.hierarchy.subSequence &&
				!!acc[curr.hierarchy.sequence.id]
			) {
				acc[curr.hierarchy.subSequence.id].push(curr);
			} else if (
				curr.hierarchy &&
				curr.hierarchy.sequence &&
				acc[curr.hierarchy.sequence.id]
			) {
				acc[curr.hierarchy.sequence.id].push(curr);
			}
			return acc;
		}, {});
		return components.map((comp) => {
			if (shouldBeDisplayed(structure, comp)) {
				return displayComponent(structure, comp);
			}
			return null;
		});
	};

	const shouldBeDisplayed = function (structure, comp) {
		const { hierarchy } = comp;
		if (!hierarchy) {
			return true;
		}
		if (!hierarchy.sequence) {
			if (
				!hierarchy.subSequence ||
				!structure[hierarchy.subSequence.id] ||
				hierarchy.subSequence.id === comp.id
			) {
				return true;
			}
			return false;
		}
		if (
			!structure[hierarchy.sequence.id] ||
			hierarchy.sequence.id === comp.id
		) {
			return true;
		}
		return false;
	};

	const displayComponent = function (componentsStructure, comp) {
		const { id, componentType } = comp;
		const Component = lunatic[componentType];
		if (componentType !== 'FilterDescription') {
			return (
				<>
					<ListItem
						className={`lunatic lunatic-component ${componentType} ${classes.component}`}
						key={`component-${id}`}
					>
						<div
							className={`lunatic-component outerContainer-${componentType}`}
							key={`component-${id}`}
						>
							<Component
								{...comp}
								handleChange={handleChange}
								preferences={preferences}
								features={features}
								bindings={bindings}
								writable
								currentPage={page}
								setPage={setPage}
								flow={flow}
								pagination={pagination}
							/>
							{displaySubComponents(componentsStructure, componentType, id)}
						</div>
					</ListItem>
					<Divider />
				</>
			);
		} else {
			return null;
		}
	};

	const displaySubComponents = function (
		componentsStructure,
		componentType,
		compId
	) {
		const subComponents = componentsStructure[compId];
		if (subComponents && subComponents.length) {
			return (
				<div className={`subElementsInnerContainer-${componentType}`}>
					{subComponents.map((q) => displayComponent(componentsStructure, q))}
				</div>
			);
		}
		return null;
	};

	return (
		<List className={classes.root}>
			{displayComponents()}
			<ButtonUI
				className={classes.buttonValidate}
				label="Valider les réponses"
				onClick={() => API.postParadata(lunatic.getState(questionnaire))}
			/>
			{pagination && (
				<Navigation
					isFirstPage={isFirstPage}
					goPrevious={goPrevious}
					goNext={goNext}
					isLastPage={isLastPage}
				/>
			)}
		</List>
	);
};

export default Orchestrator;
