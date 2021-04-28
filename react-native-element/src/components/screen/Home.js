import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import Geoloc from "../geoloc";
import Itineraire from "../itineraire";
import Notification from "../notif";
import Telephoner from "../tel";
import Agenda from '../agenda'

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Notification />
      </View>
      <View style={styles.container}>
        <Telephoner />
      </View>
      <View style={styles.container}>
        <Geoloc />
      </View>
      <View style={styles.container}>
        <Itineraire />
      </View>
      <View style={styles.container}>
        <Agenda />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
