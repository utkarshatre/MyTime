import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Button } from "react-native-paper";

const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "contact",
      }}
    />
  );
};

type UserData = {
  id: string;
  name: string;
};

export const DATA: UserData[] = [
  {
    id: "1",
    name: "Person 1",
  },
  {
    id: "2",
    name: "Person 2",
  },
  {
    id: "3",
    name: "Person 3",
  },
  {
    id: "4",
    name: "Person 4",
  },
  {
    id: "5",
    name: "Person 5",
  },
  {
    id: "6",
    name: "Person 6",
  },
  {
    id: "7",
    name: "Person 7",
  },
  {
    id: "8",
    name: "Person 8",
  },
  {
    id: "9",
    name: "Person 9",
  },
  {
    id: "10",
    name: "Person 10",
  },
  {
    id: "11",
    name: "Person 11",
  },
  {
    id: "12",
    name: "Person 12",
  },
  {
    id: "13",
    name: "Person 13",
  },
];

const Contact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenOptions />
      <Text
        style={{
          fontSize: 50,
          alignItems: "center",
          padding: 22,
          backgroundColor: "#fff",
        }}
      >
        Contacts
      </Text>
      <ScrollView>
        <View style={styles.contentContainer}>
          {DATA.map((item) => (
            <View key={item.id} style={styles.contactItem}>
              <Text style={styles.personName}>{item.name}</Text>
              <View style={styles.callButton}>
                <Button
                  icon="message"
                  mode="text"
                  onPress={() => console.log("Pressed Message")}
                ></Button>
                <Button
                  icon="phone"
                  mode="text"
                  onPress={() => console.log("Pressed Phone")}
                ></Button>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  contentContainer: {
    justifyContent: "space-between",
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  personName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  callButton: {
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
});
