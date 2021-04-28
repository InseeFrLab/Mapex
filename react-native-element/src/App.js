import React from "react";
import "./App.css";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./components/screen/Home";
import { Icon } from "react-native-elements";

function App() {
  return (
    <SafeAreaProvider>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Application Minimale",
          style: { color: "white", fontSize: 18, fontWeight: "bold" },
        }}
        rightComponent={
          <Icon name="cloud-download" type="ionicons" color="#fff" />
        }
      />
      <HomeScreen />
    </SafeAreaProvider>
  );
}
export default App;
