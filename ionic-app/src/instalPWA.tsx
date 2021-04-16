import React, { useEffect, useState } from "react";
import { IonIcon, IonButton } from '@ionic/react';
import { cloudDoneSharp } from "ionicons/icons";
import { useAddToHomescreenPrompt } from "./utils/useAddToHomescreenPrompt";

export function InstallPWA() {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isVisible, setVisibleState] = useState(false);

    const hide = () => setVisibleState(false);
    useEffect(
        () => {
            if (prompt) {
                setVisibleState(true);
            }
        },
        [prompt]
    );

    if (!isVisible) {
        return null;
    }

    // const [supportsPWA, setSupportsPWA] = useState<boolean>(true);
    // const [promptInstall, setPromptInstall] = useState<any>(null);

    // useEffect(() => {
    //     const handler = (e: any) => {
    //         e.preventDefault();
    //         setSupportsPWA(true);
    //         setPromptInstall(e);
    //     };
    //     window.addEventListener("beforeinstallprompt", handler);

    //     return () => window.removeEventListener("transitionend", handler);
    // }, []);

    // const handleClick = (event: React.MouseEvent) => {
    //     event.preventDefault();
    //     alert(event.preventDefault());
    //     if (!promptInstall){
    //         alert("prompt null")
    //         return;
    //     }
    //     alert("prompt")
    //     promptInstall.prompt();
    // };
    // if (!supportsPWA) {
    //     return null;
    // }
    return (
        <div onClick={hide}>
            <IonButton onClick={promptToInstall}>
                <IonIcon slot="icon-only" icon={cloudDoneSharp} />
            </IonButton>
        </div>

    );
};