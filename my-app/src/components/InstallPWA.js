import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
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
    // <button
    //   className="link-button"
    //   id="setup_button"
    //   aria-label="Install app"
    //   title="Install app"
    //   onClick={onClick}
    // >
    //   Install
    // </button>

    <Button variant="outlined" onClick={onClick} color="primary" startIcon={<HomeIcon />}>
    Ajouter l'application à l'écran d'accueil
    </Button>

  );
};

export default InstallPWA;

