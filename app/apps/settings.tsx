import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native-paper";

const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "settings",
      }}
    />
  );
};
const SettingScreen = () => {
  return (
    <>
      <ScreenOptions />
      <Text>Setting Screen</Text>
    </>
  );
};
export default SettingScreen;
