import React, { useEffect, useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ButtonIcon from 'components/common/icon-button';
import  Alert from '@material-ui/lab/Alert';

const InstallPWA = () => {
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] = useState(null);

	useEffect(() => {
		const handler = (e) => {
			e.preventDefault();
			console.log('we are being triggered :D');
			setSupportsPWA(true);
			setPromptInstall(e);
		};
		window.addEventListener('beforeinstallprompt', handler);

		return () => window.removeEventListener('transitionend', handler);
	}, []);

	const onClick = (evt) => {
		evt.preventDefault();
		if (!promptInstall) {
			return;
		}
		promptInstall.prompt();
	};
	if (!supportsPWA) {
		return null;
	}
	return (
		<Alert
			severity="info"
			action={<ButtonIcon onClick={onClick} icon={<HomeIcon />} />}
		>
			Ajouter l'application à l'écran d'acceuil — <strong>check it out!</strong>
		</Alert>
	);
};

export default InstallPWA;
