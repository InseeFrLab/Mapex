import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ModalReperage = ({ open, setOpen, handleSend }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Validation'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Êtes vous sûr de vouloir envoyer vos réponses aux questions ?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSend}>Oui</Button>
					<Button onClick={handleClose} autoFocus>
						Non
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ModalReperage;
