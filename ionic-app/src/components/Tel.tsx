import { IonInput, IonLabel,IonItem, IonButton, IonList, IonListHeader } from "@ionic/react";
import  {useState} from 'react';
import { CallNumber } from '@ionic-native/call-number'; 


const Telephoner = () => {
    const regexTel : RegExp = /^(?:(?:(?:\+|00)33\D?(?:\D?\(0\)\D?)?)|0){1}[1-9]{1}(?:\D?\d{2}){4}$/s;
    const [tel, setTel] = useState<string>("");
    const [showLabelIncorect,setShowLabelIncorrect] = useState<boolean>(true);

    const Call = () => {
        setShowLabelIncorrect(true);
        CallNumber.callNumber(tel, true).then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
        return `window.open(tel:${tel})`;
    };

    const handleClick = () => {
        regexTel.test(tel) ? Call() : setShowLabelIncorrect(false);
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
                onIonChange={e => setTel(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
                <IonButton onClick={handleClick}>Appeler</IonButton>
                <IonLabel hidden={showLabelIncorect}> Téléphone non valide</IonLabel>
            </IonItem>
                
        </IonList>
    )
}

export default Telephoner;