import { Tabs, router } from "expo-router";
// import { FlatList, ScrollView } from "react-native";

import React, { useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Searchbar, Button, FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CatagoriesD2 from "../CatagoriesD2";
// import { firebase, db } from "../../../firebase";
import PostFeedD1 from "../PostFeedD1";
import { StatusBar } from "expo-status-bar";
import SearchResult from "../SearchResult";
//  import PostFeed from "../PostFeed";
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
  const getSearchResult = async () => {
    console.log(" entered in method ");
    try {
      const response = await fetch("http://localhost:9200/posts/_search");
      const data = await response.json(); // Use 'await' to get the actual data

      console.log(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  useEffect(() => {
    getSearchResult();
  }, []);
  const handleAddPostPress = () => {
    router.push("/(app)/addpost");
  };
  const handleSearch=()=>{
    router.push("SearchResult");
  }
  return (
    <SafeAreaView style={styles.containerMain}>
      <StatusBar />
      <View style={styles.containerSearchBox}>
        <Searchbar
          // style={styles.searchbar}
          placeholder="Your Needs are NearBy..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={handleSearch }
        />
      </View>
      <View style={styles.containerCatagories}>
        <CatagoriesD2 />
      </View>
      <View style={styles.containerPostFeed}>
      {/* <SearchResult/> */}
        <PostFeedD1 />
        {/* <PostFeed /> */}
      </View>
      <ScreenOptions />

      <FAB
        icon="plus"
        style={styles.containerPlus}
        onPress={handleAddPostPress}
      />
    </SafeAreaView>
  );
};
export default home;
const styles = StyleSheet.create({
  status: {
    // barStyle="dark-content",
    // backgroundColor="white"
  },
  containerMain: {
    display: "flex",
    flex: 1,
  },
  containerSearchBox: {
    flex: 0,
    marginTop: 35,
    marginLeft: 30,
    marginRight: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // height: 30,
    width: 330,
  },
  containerCatagories: {
    flex: 0,
  },
  containerPostFeed: {
    flex: 1,
  },

  containerPlus: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },

  searchbar: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // borderRadius: 20,
    // height: 60,
    // width: 330,
  },
  icon: {
    marginRight: 50,
    marginLeft: 15,
    padding: 4,
    borderRadius: 3,
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
