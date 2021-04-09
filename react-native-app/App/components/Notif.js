import React, { useState } from "react";
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import Separator from './Separator'

const Notif = () => {
    const [minutesNotif, setMinutesNotif] = useState(1);

    const styles = StyleSheet.create({
        title: {
            textAlign: 'left',
        }
    });

    return (
        <View>
            <Text style={styles.title}>
                Recevoir une notification :
                {"\n"}
            </Text>
            <Text>Dans :</Text> <TextInput value={minutesNotif} ></TextInput>
            <Button title="Me notifier" ></Button>
        </View>
        
    );
}



export default Notif;