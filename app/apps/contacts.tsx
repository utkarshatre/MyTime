import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native-paper";

const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "contacts",
      }}
    />
  );
};
const ContactScreen = () => {
  return (
    <>
      <ScreenOptions />
      <Text>Contact Screen</Text>
    </>
  );
};
export default ContactScreen;
