import { useState, useEffect, useRef} from 'react';

import Button from '@material-ui/core/Button';


import MapLeaflet from './MapLeaflet';
import Section from './Section';

const Geoloc = ({classes}) => {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [map, setMap] = useState();
    const [located, setLocated] = useState(false);
    const isFirstRender = useRef(true)

    useEffect(() => { 
        if ( map!==undefined && located){
            map.flyTo(position,16);
        }   
    },[position,map,located]);
    
    useEffect(() => {
        if (!isFirstRender.current) {
            setLocated(true) // do something after state has updated
        }
      }, [position])

    useEffect(() => { 
        isFirstRender.current = false // toggle flag after first render/mounting
      }, [])


      const getLocation = () => {
        navigator.geolocation.getCurrentPosition(function(pos) {
            setPosition([pos.coords.latitude,pos.coords.longitude]);
        },);
    }
    return(
        <Section title="Se géolocaliser :" >
            <MapLeaflet position={position} setMap={setMap} located={located}/>
            <Button className={classes.button} onClick={getLocation}>Trouvez moi</Button>
          </Section>
    )

}

export default Geoloc;