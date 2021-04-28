import { Card, Button,Input,Icon } from "react-native-elements";
import { useState } from "react";
import {  Linking} from "react-native";


const Itineraire = () => {
  const [adresse, setAdresse] = useState();

  // const url = Platform.select({
  //   ios: `maps:0,0?q=${adresse}`,
  //   android: `geo:0,0?q=${adresse}`,
  // })
  const handleClick = () => {
    console.log(navigator.userAgent)
    Linking.openURL(`geo:0,0?q=${adresse}`);
  }

  return (
    <Card>
      <Card.Title>Itinéraire</Card.Title>
      <Card.Divider />
      <Input 
      placeholder="Adresse" 
      leftIcon={<Icon type='material-community' name='google-maps'/>}
      onChange={e => setAdresse(e.target.value)}/>
      <Button title="Y aller" onPress={handleClick}/>
    </Card>
  );
};
export default Itineraire;
