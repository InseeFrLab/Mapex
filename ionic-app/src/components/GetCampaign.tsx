import { IonButton, IonInput, IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import React from "react";

const Campaign = () => {

    return(
        <IonList >
            <IonListHeader  color="primary">
            Récupérer une campagne :
            </IonListHeader>
                <IonButton>Récupérer</IonButton>
            <IonItem>
                <IonLabel><h2>Campagne :</h2>
                <p>
                    id : id-return
                    <br />
                    label : label-return
                    <br />
                    endDate : endDate-return
                </p>
                </IonLabel>
            </IonItem>
        </IonList>
    )
}
export default Campaign;