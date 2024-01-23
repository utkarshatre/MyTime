import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native-paper";

const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "profile",
      }}
    />
  );
};
const ProfileScreen = () => {
  return (
    <>
      <ScreenOptions />
      <Text>Profile Screen</Text>
    </>
  );
};
export default ProfileScreen;
