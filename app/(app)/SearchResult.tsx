import React, { FC, useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Avatar, Card, Searchbar, Text } from "react-native-paper";
import { SliderBox } from "react-native-image-slider-box";
import { router } from "expo-router";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const SPACING = 5;
const ITEM_LENGTH = Dimensions.get("screen").width - 210;
const ITEM_HEIGHT = Dimensions.get("screen").width - 210;
const BORDER_RADIUS = 20;

const SearchResult = () => {
  const [searchedData, setSearchedData] = useState<any>();

  const getsearched = async () => {
    console.log(" entered in method ");
    const apiUrl =
      // "http://192.168.4.27:3000/users/kQUpGMpStgcd0Hp2JnSVQQlvEOh2/posts";
      "http://192.168.4.27:9200/posts/_search";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data, null, 2));
        setSearchedData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    // getApi();
    getsearched();
  }, []);
  const handlePress = () => {
    router.push("/(tab)/profile");
  };

  const Item = ({ item }) => (
    <Card style={styles.card} onPress={handlePress}>
      <Text>{item._source.images}</Text>
      {/* <SliderBox images={item.images} dotColor="orange" style={styles.image} /> */}
    </Card>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <Searchbar style={styles.searchbar} /> */}
        <ScrollView>
          <TouchableOpacity>
            <FlatList
              style={styles.flatlist}
              data={searchedData.hits.hits}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item._id}
              extraData={searchedData}
              horizontal={false}
              numColumns={2}
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default SearchResult;
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    padding: 10,
  },
  searchbar: {
    marginBottom: 10,
  },
  card: {
    marginVertical: 5,
    marginHorizontal: 5,
    height: ITEM_HEIGHT,
    width: ITEM_LENGTH,
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  flatlist: {
    // display: "flex",
    // flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
  },
  caption: {},
  image: {
    width: ITEM_LENGTH,
    height: ITEM_HEIGHT,
    borderRadius: BORDER_RADIUS,
    resizeMode: "cover",
    // flexDirection: "row",
  },
  video: {
    paddingHorizontal: 10,
    width: ITEM_LENGTH,
    height: ITEM_HEIGHT,
    borderRadius: BORDER_RADIUS,
    resizeMode: "contain",
  },
});
