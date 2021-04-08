import './ExploreContainer.css';
import Notification from './Notif';
import Telephoner from './Tel';
import Geoloc from './Geoloc';
import Itineraire from './Itineraire';
import Agenda from './Agenda';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <Notification />
      <Telephoner />
      <Geoloc />
      <Itineraire />
      <Agenda />
    </div>
  );
};

export default ExploreContainer;  
