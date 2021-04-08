import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Application Minimale</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        {/* <IonHeader collapse="condense">
          <IonToolbar >
            <IonTitle size="large">Application </IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
