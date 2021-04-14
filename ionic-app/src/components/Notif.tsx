import { IonInput, IonLabel, IonItem, IonButton, IonList, IonListHeader } from "@ionic/react";
import { useState } from 'react';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { getByTitle } from "@testing-library/dom";

const Notif = () => {
    const [number, setNumber] = useState<number>(1);

    const makeNotification = (title: string, text: string) => {
        var notification = new Notification(title)
    }

    function displayNotification(title: string, text: string) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title);
        });
    }



    const setNotification = () => {
        const title: string = "Test Notification Title";
        const text: string = 'Première notification';

        if (!('Notification' in window)) {
            alert('Ce navigateur ne prend pas en charge la notification de bureau')
        }
        else if (Notification.permission === 'granted') {
            // Si tout va bien, créons une notification
            // makeNotification(title, text);
            displayNotification(title, text)
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                // Si l'utilisateur accepte, créons une notification
                if (permission === 'granted') {
                    // makeNotification(title, text);
                    displayNotification(title, text)
                }
            })
        }

    }

    const makeLocalNotification = (title: string, text: string) => {
        LocalNotifications.schedule({
            title: title,
            text: text
        })
    }
    return (

        <IonList >
            <IonListHeader color="primary">
                Recevoir une notification :
            </IonListHeader>
            <IonItem>
                <IonLabel>Dans</IonLabel>
                <IonInput value={number} type="number" min="1" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
                <IonLabel>  minute(s) </IonLabel>
            </IonItem>
            <IonButton onClick={setNotification}>Me notifier</IonButton>
        </IonList>
    )
}

export default Notif;

