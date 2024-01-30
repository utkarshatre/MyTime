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
  keyword: string;
  backgroundcolor: string;
};

export const DATA: ItemData[] = [
  {
    id: "1",
    title: "All",
    icon: "☰",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#CDB7F6",
  },
  {
    id: "2",
    title: "Makeup Artist",
    icon: "👩",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FFFF9E",
  },
  {
    id: "3",
    title: "Fitness",
    icon: "💪🏻",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#D6AA8D",
  },
  {
    id: "4",
    title: "Restaurants",
    icon: "🍷",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FF4F4B",
  },
  {
    id: "5",
    title: "Food Stall",
    icon: "🥘",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FF817E",
  },
  {
    id: "6",
    title: "Bakery",
    icon: "🧁",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "pink",
  },
  {
    id: "7",
    title: "Politics",
    icon: "🚨",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FFC299",
  },
  {
    id: "8",
    icon: "👔",
    title: "Clothing",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#A4C7FD",
  },
  {
    id: "9",
    icon: "🗒",
    title: "Others",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#E2E2E2",
  },
];
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
};

const Item = ({ backgroundColor, item, onPress }: ItemProps) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor, flexDirection: "row" }]}
    >
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.keyword}>{item.keyword}</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
const Catagories = () => {
  // THIS IS FOR INTERNSHALA CARD TYPE
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor =
      item.id === selectedId ? item.backgroundcolor : item.backgroundcolor;
    //  const color = item.id === selectedId ? "CDB7F6" : "black";

    return (
      <Item
        item={item}
        backgroundColor={backgroundColor}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};

export default Catagories;

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    flex: 1,
    fontSize: 20,
  },
  keyword: {
    fontSize: 15,
  },
  icon: {
    marginHorizontal: 10,
    marginLeft: 10,
    fontSize: 40,
  },
});
