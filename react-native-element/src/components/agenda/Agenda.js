import React, { useState } from "react";
import { Card, Button, Input } from "react-native-elements";

import { View, StyleSheet } from "react-native";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
const Agenda = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  return (
    <Card>
      <Card.Title> Agenda </Card.Title>
      <Card.Divider />
      <Input
        rightIcon={{ type: "font-awesome", name: "calendar" }}
        placeholder="Nom du rendez-vous"
      />
      <View style={styles.picker}>
        {/* /!\ A modifier en cas de build Android ou iOS 
      (je n'ai pas trouvé de datePicker compatible web/natif) */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            size="medium"
            variant="inline"
            autoOk
            ampm={false}
            value={startDate}
            onChange={setStartDate}
            label="Date de début"
            format="dd/MM/yyyy HH:mm"
          />
          <DateTimePicker
            variant="inline"
            margin="normal"
            autoOk
            ampm={false}
            value={endDate}
            onChange={setEndDate}
            label="Date de fin"
            format="dd/MM/yyyy HH:mm"
          />
        </MuiPickersUtilsProvider>
      </View>
      <Button title="Ajouter" />
    </Card>
  );
};

const styles = StyleSheet.create({
  picker: {
    margin: 10,
  },
});

export default Agenda;
