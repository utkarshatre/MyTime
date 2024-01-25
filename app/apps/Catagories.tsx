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
      <Text style={styles.icon}>{item.icon}</Text>
    </TouchableOpacity>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);
const Catagories = () => {
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
    marginRight: 3,
    marginBottom: 30,
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    // flexDirection: "row", // Set flexDirection to row
  },
  title: {
    fontSize: 11,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  icon: {
    textAlign: "center",
    fontSize: 45,
    alignItems: "center",
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: "#FFFF9E",
  },
});
