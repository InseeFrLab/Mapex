import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ButtonIcon from 'components/common/icon-button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import questionnaire from 'questionnaire-lunatic/simpsons-question.json';
import tic from 'questionnaire-lunatic/form.json';
import { CollectOrchestrator } from 'components/orchestrator';

const sendData = (surveyUnit) => {};

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '60px',
	},
	appBar: {},
	title: {
		flexGrow: 1,
	},
	buttonTopRight: {
		marginRight: theme.spacing(2),
	},
	icons: {
		textAlign: 'center',
		paddingTop: '0.3em',
	},
}));

const Reperage = () => {
	const history = useHistory();
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<ButtonIcon
						color="inherit"
						className={classes.buttonTopRight}
						icon={<NavigateBeforeIcon />}
						onClick={() => history.goBack()}
					/>
					<div className={classes.title}>
						<h1>Questionnaire de repérage</h1>
					</div>
				</Toolbar>
			</AppBar>

			<CollectOrchestrator source={tic} pagination={true} />
		</div>
	);
};

export default Reperage;
