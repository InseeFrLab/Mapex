import { IonInput, IonItem, IonButton, IonListHeader, IonList } from "@ionic/react";
import React , {useState} from 'react';

const CompaignPut = () => {
    const [nouveauLabel,setNouveauLabel] = useState<string>();

    return (
        <IonList>
            <IonListHeader color="primary">
                Modifier le label de la compagne :
            </IonListHeader>
            <IonItem>
                <IonInput  type="text" value={nouveauLabel} placeholder="Nouveau label" onIonChange={e => setNouveauLabel(e.detail.value!)}></IonInput>
                <IonButton>Modifier</IonButton>
            </IonItem>
        </IonList>
    )
}

export default CompaignPut;