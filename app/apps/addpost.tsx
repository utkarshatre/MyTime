import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "addpost",
      }}
    />
  );
};

const addpost = () => {
  return (
    <>
      <ScreenOptions />
      <Text>Post Screen</Text>
    </>
  );
};

export default addpost;

const styles = StyleSheet.create({});
