import './ExploreContainer.css';
import Campaign from './GetCampaign'
import CompaignPut from './SetCampaign';

interface ContainerProps {
  name: string;
}

const ContainerTab2: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
        <Campaign /> 
        <CompaignPut />
    </div>
  );
};

export default ContainerTab2;  
