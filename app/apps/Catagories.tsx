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
};

export const DATA: ItemData[] = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "First Item",
  },
  {
    id: "3",
    title: "Second Item",
  },
  {
    id: "4",
    title: "Third Item",
  },
  {
    id: "5",
    title: "Forth Item",
  },
  {
    id: "6",
    title: "Fifth Item",
  },
];
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);
const Catagories = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "CDB7F6" : "white";
    const color = item.id === selectedId ? "white" : "black";

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
    margin: 2,
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row", // Set flexDirection to row
  },
  title: {
    fontSize: 10,
  },
});
