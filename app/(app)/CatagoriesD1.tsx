import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

type ItemData = {
  id: string;
  title: string;
  icon: string;
};

export const DATA: ItemData[] = [
  {
    id: "1",
    title: "All",
    icon: "☰",
  },
  {
    id: "2",
    title: "Makeup Artist",
    icon: "👩",
  },
  {
    id: "3",
    title: "Fitness",
    icon: "💪🏻",
  },
  {
    id: "4",
    title: "Restaurants",
    icon: "🍷",
  },
  {
    id: "5",
    title: "Food Stall",
    icon: "🥘",
  },
  {
    id: "6",
    title: "Bakery",
    icon: "🧁",
  },
  {
    id: "7",
    title: "Politics",
    icon: "🚨",
  },
  {
    id: "8",
    icon: "👔",
    title: "Clothing",
  },
  {
    id: "9",
    icon: "🗒",
    title: "Others",
  },
];
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}
    >
      {/* THIS IS FOR SEARCH KEYWORD TYPE BOX WITH ICON AND TITLE */}
      <Text style={styles.titleicon}>
        {item.icon}
        {item.title}
      </Text>
    </TouchableOpacity>
    {/*  THIS IS FOR BUTTON TYPE CIRCLES
    <Text style={styles.title}>{item.title}</Text> */}
  </View>
);
const Catagories = () => {
  //THIS IS FOR SIMPLE BOX TYPE ITEMS
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "CDB7F6" : "white";
    const color = item.id === selectedId ? "CDB7F6" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <ScrollView>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </ScrollView>
  );
};

export default Catagories;

const styles = StyleSheet.create({
  item: {
    // marginVertical: 20,
    // marginLeft: 5,
    // borderRadius: 20,
    // borderColor: "black",
    // alignItems: "center",
    // borderWidth: 3,
  },
  titleicon: {
    // backgroundColor: "#FFFF9E",
    // borderColor: "black",
    // padding: 10,
    // // marginLeft: 5,
    // fontSize: 16,
    // fontWeight: "bold",
    // borderRadius: 20,
  },
  // item: {                        THIS IS FOR BUTTON TYPE CIRCLES
  //    flex:1,
  //   margin:6,
  //   padding:3,
  //   height: 60,
  //   width: 90,
  //   borderRadius:30,
  //   borderWidth: 3,
  //   borderColor: "black",
  //   justifyContent: "space-evenly",
  //    alignItems: "center",
  //   backgroundColor: "yellow",
  //   flexDirection: "row", // Set flexDirection to row
  // },
  // title: {
  //   paddingBottom:3,
  //   fontSize: 11,
  //   alignItems: "center",
  //   textAlign: "center",
  //   justifyContent: "space-evenly",
  // },
  // icon: {
  //   textAlign: "center",
  //   fontSize: 32,
  //   alignItems: "flex-start",
  //   height: 50,
  //   width: 80,
  //   borderRadius: 20,
  //   backgroundColor: "#FFFF9E",
  // },
});
