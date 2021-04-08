import { IonInput, IonLabel,IonItem, IonButton, IonDatetime, IonList, IonListHeader } from "@ionic/react";
import React , {useState} from 'react';
import { Calendar } from '@ionic-native/calendar';
import format from 'date-fns/format';

const Agenda = () => {

    const [nomEvenement,setNomEvenement] = useState<string>();
    const [startDate,setStartDate] = useState<Date>(new Date());
    const [endDate,setEndDate] = useState<Date>(startDate) 
    
    const validFormat = () => {
        let formIsValid = true;
        
        if(!nomEvenement) {
            formIsValid = false;
        }
        if (startDate>endDate){
            formIsValid = false;
        }
        
        return formIsValid;

    }
    const setEvent = () => {
        const eventLocation : string = "Location";
        const notes:string = "notes"
        Calendar.createEvent(nomEvenement,eventLocation,notes,startDate,endDate);
    }

    const handleClick = () =>{
        if(validFormat()){
            console.log('success !!')
            setEvent();
        }
    }

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
                <IonDatetime display-format="DD MMM YYYY HH:mm" picker-format="DD MMM YYYY HH:mm" value={startDate.toString()} onIonChange={e => {setStartDate(new Date(e.detail.value!)); console.log(startDate)}}/>
            </IonItem>
            <IonItem>
                <IonLabel>
                    Heure de fin
                </IonLabel>
                <IonDatetime display-format="DD MMM YYYY HH:mm" picker-format="DD MMM YYYY HH:mm" value={endDate.toString()} onIonChange={e => setEndDate(new Date(e.detail.value!))}/>
            </IonItem>
            <IonButton onClick={handleClick}> Ajouter</IonButton>
        </IonList>
    );

    }
export default Agenda;