import { Tabs } from "expo-router";
// import { FlatList, ScrollView } from "react-native";

import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Searchbar, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Catagories from "./Catagories";
const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "Home",
        tabBarLabel: "Home",
        tabBarIcon: (props) => <Icon {...props} name="home" />,
      }}
    />
  );
};

const home = () => {
  const Tab = createBottomTabNavigator();
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      <View>
        <ScreenOptions />

        <View style={styles.header}>
          <Searchbar
            style={styles.searchbar}
            placeholder="Connect with NearBy People."
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <Button
            style={styles.icon}
            icon="phone"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            .
          </Button>
        </View>

        <View>
          <Catagories />
        </View>
      </View>
    </>
  );
};
export default home;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  searchbar: {
    marginLeft: 100,
    marginRight: 5,
    borderRadius: 5,
    height: 50,
    width: 330,
  },
  icon: {
    marginRight: 50,
    marginLeft: 15,
    padding: 4,
    borderEndEndRadius: 3,
  },
  // storiesContainer: {
  //   flexDirection: "row",
  //   paddingHorizontal: 10,
  // },
  // navbarbottom: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  // storiesProfile: {
  //   height: 80,
  //   width: 80,
  //   borderRadius: 80 / 2,
  //   borderWidth: 3,
  //   borderColor: "black",
  //   marginRight: 10,
  //   allignItems: "center",
  //   justifyContent: "center",
  // },
  // storiesText: {
  //   textAlign: "center",
  //   justifyContent: "center",
  // },
});
