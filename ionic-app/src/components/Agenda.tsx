import { IonInput, IonLabel, IonItem, IonButton, IonDatetime, IonList, IonListHeader } from "@ionic/react";
import React, { useEffect, useRef, useState } from 'react';
import { googleCalendarEventUrl } from 'google-calendar-url';


const Agenda = () => {

    const [nomEvenement, setNomEvenement] = useState<string>();
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(startDate)
    const [errorValidation, setErrorValisation] = useState<boolean>(false);
    const firstUpdate = useRef<boolean>(true);

    useEffect(() => {
        const validFormat = () => {
            let formIsValid = true;

            if (!nomEvenement) {
                formIsValid = false;
            }
            if (startDate > endDate) {
                formIsValid = false;
            }
            return formIsValid;
        }
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        else {
            setErrorValisation(!validFormat())
        }
    },[nomEvenement, startDate, endDate]);

    // Implementation avec Plugin Natif
    // const setEvent = () => {
    //     const eventLocation: string = "Location";
    //     const notes: string = "notes"
    //     Calendar.createEvent(nomEvenement, eventLocation, notes, startDate, endDate);
    // }

    const makeUrl = () => {

        const formattedStart = startDate.toISOString().replace(/-/g, '').replace(/:/g, '').replace('.000', '').substr(0, 15);
        const formattedEnd = endDate.toISOString().replace(/-/g, '').replace(/:/g, '').replace('.000', '').substr(0, 15);

        const url = googleCalendarEventUrl({
            start: formattedStart,
            end: formattedEnd,
            title: nomEvenement,
            details: 'DETAILS',
            location: 'LOCATION',
        });
        return url;
    }

    // const handleClick = () => {
    //     if (validFormat()) {
    //         setErrorValisation(false);
    //         return (makeUrl)
    //     }
    //     else {
    //         setErrorValisation(true);
    //     }
    // }

    return (
        <IonList>
            <IonListHeader color="primary">
                Agenda :
            </IonListHeader>
            <IonItem>
                <IonInput value={nomEvenement} type="text" placeholder="Nom du rendez-vous" onIonChange={e => setNomEvenement(e.detail.value!)} />
                {/* <IonDatetime value={date.toString()} displayFormat="DD MMM YYYY" placeholder="Select Date"  onIonChange={e => setDate(format(new Date(e.detail.value!), 'dd MMM yyyy'))}/> */}
            </IonItem>
            <IonItem>
                <IonLabel>
                    Heure de début
                </IonLabel>
                <IonDatetime display-format="DD MMM YYYY HH:mm" picker-format="DD MMM YYYY HH:mm" value={startDate.toString()} onIonChange={e => { setStartDate(new Date(e.detail.value!)); console.log(startDate) }} />
            </IonItem>
            <IonItem>
                <IonLabel>
                    Heure de fin
                </IonLabel>
                <IonDatetime display-format="DD MMM YYYY HH:mm" picker-format="DD MMM YYYY HH:mm" value={endDate.toString()} onIonChange={e => setEndDate(new Date(e.detail.value!))} />
            </IonItem>
            <IonButton href={makeUrl()} disabled={firstUpdate.current || errorValidation}> Ajouter</IonButton>
            <IonLabel hidden={!errorValidation}>Renseignements incorrects</IonLabel>
        </IonList>
    );

}
export default Agenda;