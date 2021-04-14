import { IonInput, IonItem, IonButton, IonListHeader, IonList } from "@ionic/react";
import React , {useState} from 'react';

const Itineraire = () => {
    const [adresse, setAdresse] = useState<string>();

    return (
        <IonList>
            <IonListHeader color="primary">
                Itinéraire :
            </IonListHeader>
            <IonItem>
                <IonInput value={adresse} type="text" placeholder="Adresse" onIonChange={e => setAdresse(e.detail.value!)}></IonInput>
                {/* Pour un téléphone iOS ->  https://maps.apple.com/maps?q=${adresse} */}
                <IonButton href={`https://maps.google.com/?q=${adresse}`}>Y aller</IonButton>
            </IonItem>
        </IonList>
    )
}

export default Itineraire;