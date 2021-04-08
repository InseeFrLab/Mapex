import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ContainerTab2 from '../components/ContainerTab2'
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Application Minimale</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContainerTab2 name="Tab 2 page" />
        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
