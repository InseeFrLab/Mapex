import { Card, Button } from "react-native-elements";
import { View , Linking} from "react-native";
import { useState } from "react";
import { Input } from "react-native-elements/dist/input/Input";

const Telephoner = () => {
  const regexTel = /^(?:(?:(?:\+|00)33\D?(?:\D?\(0\)\D?)?)|0){1}[1-9]{1}(?:\D?\d{2}){4}$/s;
  const [tel, setTel] = useState();
  const [telCorrect, setTelCorrect] = useState(true);

  const handleChange = (e) => {
    setTel(e.target.value);
    setTelCorrect(regexTel.test(e.target.value));
  };

  const handleClick = () => {
    telCorrect && Linking.openURL(`tel:${tel}`);
  }
  return (
    <Card>
      <Card.Title>Téléphoner</Card.Title>
      <Card.Divider />
      <View>
        <Input
          placeholder="06 00 00 00 00"
          leftIcon={{ name: "phone" }}
          onChange={handleChange}
        />
      </View>

      <Button
        title="Téléphoner"
        onPress={handleClick}
      />
    </Card>
  );
};
export default Telephoner;
