import React, { useEffect, useState } from 'react';
import ButtonIcon from 'components/common/icon-button';
import Alert from '@material-ui/lab/Alert';
import GetAppIcon from '@material-ui/icons/GetApp';

const InstallPWA = () => {
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] = useState(null);

	useEffect(() => {
		const handler = (e) => {
			e.preventDefault();
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
			action={<ButtonIcon onClick={onClick} icon={<GetAppIcon />} />}
		>
			Ajouter l'application à l'écran d'accueil
		</Alert>
	);
};

export default InstallPWA;
