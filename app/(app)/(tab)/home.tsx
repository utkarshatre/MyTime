import { Tabs, router } from "expo-router";
// import { FlatList, ScrollView } from "react-native";

import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Searchbar, Button, FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CatagoriesD2 from "../CatagoriesD2";

import PostFeedD1 from "../PostFeedD1";
import { StatusBar } from "expo-status-bar";
// import PostFeed from "../PostFeed";
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
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleAddPostPress = () => {
    router.push("/(app)/addpost");
  };
  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container2}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Your Needs are NearBy..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <CatagoriesD2 />

        <PostFeedD1 />
        {/* <PostFeed /> */}

        <ScreenOptions />
      </View>
      <FAB icon="plus" style={styles.fab} onPress={handleAddPostPress} />
    </SafeAreaView>
  );
};
export default home;
const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
    margin: 10,
  },
  header: {},
  searchbar: {
    marginTop: 30,
    marginLeft: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 60,
    width: 330,
  },
  icon: {
    marginRight: 50,
    marginLeft: 15,
    padding: 4,
    borderRadius: 3,
  },
  catagories: {},
  postfeed: {},
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
{
  /* <Button
            style={styles.icon}        //Ankit Sir updates about to remove it
            icon="phone"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            .
          </Button> */
}
