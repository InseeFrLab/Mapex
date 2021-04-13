import { IonInput, IonLabel, IonItem, IonButton, IonList, IonListHeader } from "@ionic/react";
import { useEffect, useRef, useState } from 'react';
import { CallNumber } from '@ionic-native/call-number';


const Telephoner = () => {
    const regexTel: RegExp = /^(?:(?:(?:\+|00)33\D?(?:\D?\(0\)\D?)?)|0){1}[1-9]{1}(?:\D?\d{2}){4}$/s;
    const [tel, setTel] = useState<string>("");
    const [telCorrect, setTelCorrect] = useState<boolean>(true);
    const firstUpdate = useRef<boolean>(true);

    useEffect(() => {
        if (firstUpdate.current) {
          firstUpdate.current = false;
          return;
        }
      });

    const Call = () => {
        CallNumber.callNumber(tel, true).then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    };

    const handleChange = (e:CustomEvent) => {
        setTel(e.detail.value!);
        setTelCorrect(regexTel.test(e.detail.value!));
    }

    return (
        <IonList>
            <IonListHeader color="primary">
                Téléphoner :
            </IonListHeader>

            <IonItem>
                <IonLabel>
                    Au
                </IonLabel>
                <IonInput value={tel} type="tel" placeholder="06 12 34 56 78"
                    pattern="^(?:(?:(?:\+|00)33\D?(?:\D?\(0\)\D?)?)|0){1}[1-9]{1}(?:\D?\d{2}){4}$"
                    onIonChange={handleChange}></IonInput>
            </IonItem>
            <IonItem>
                <IonButton href={`tel:${tel}`} disabled={firstUpdate.current || !telCorrect}>Appeler</IonButton>
                <IonLabel hidden={telCorrect}> Téléphone non valide</IonLabel>
            </IonItem>

        </IonList>
    )
}

export default Telephoner;