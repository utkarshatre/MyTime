import { Tabs, router } from "expo-router";
// import { FlatList, ScrollView } from "react-native";

import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, Button, FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CatagoriesD2 from "../CatagoriesD2";

import PostFeed from "../PostFeed";
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
    <>
      <View style={styles.container}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Your Needs are NearBy..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <CatagoriesD2 />
        <PostFeed />

        <ScreenOptions />
      </View>
      <FAB icon="plus" style={styles.fab} onPress={handleAddPostPress} />
    </>
  );
};
export default home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  header: {
    //  flex: 1,
  },
  searchbar: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 50,
    width: 330,
  },
  icon: {
    marginRight: 50,
    marginLeft: 15,
    padding: 4,
    borderRadius: 3,
  },
  catagories: {
    marginBottom: 10,
  },
  postfeed: {
    //  paddingTop:90,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
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
