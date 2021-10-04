import React from 'react';
import * as lunatic from '@inseefr/lunatic';
import { Card, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flex: '1 1 auto',
		backgroundColor: 'whitesmoke',
		padding: '0',
		paddingTop: '1em',
		paddingBottom: '3em',
	},
	component: {
		padding: '10px',
		overflow: 'visible',
		marginBottom: '10px',
		'& *': { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
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
			maxPage,
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
	const Button = lunatic.Button;

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
				<Card
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
							labelPosition="TOP"
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
				</Card>
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
		<div className="container">
			<div className="components">
				{displayComponents()}
			</div>
			{pagination && (
				<>
					<div className="pagination">
						<Button
							onClick={goPrevious}
							disabled={isFirstPage}
							value="Previous"
						/>
						<Button onClick={goNext} disabled={isLastPage} value="Next" />
						<div className="btn-page-init">
							<Button
								onClick={() => setPage('1')}
								disabled={isFirstPage}
								value="Page 1"
							/>
						</div>
					</div>
					<div>{`Page : ${page}/${maxPage}`}</div>
				</>
			)}
		</div>
	);
};

export default Orchestrator;
