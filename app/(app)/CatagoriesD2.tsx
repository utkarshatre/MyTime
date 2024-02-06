import {
  FlatList,
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
  textColor: string;
};

export const DATA: ItemData[] = [
  {
    id: "1",
    title: "All",
    icon: "☰",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#CDB7F6",
    textColor: "#303030",
  },
  {
    id: "2",
    title: "Makeup Artist",
    icon: "👩",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FFFF9E",
    textColor: "#7F5A37",
  },
  {
    id: "3",
    title: "Fitness",
    icon: "💪🏻",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#D6AA8D",
    textColor: "#654321",
  },
  {
    id: "4",
    title: "Restaurants",
    icon: "🍷",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FF817E",
    textColor: "white", },
  {
    id: "5",
    title: "Food Stall",
    icon: "🥘",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FF8533",
    textColor: "#FFFFE3", 
  },
  
  {
    id: "6",
    title: "Bakery",
    icon: "🧁",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FF6666",
    textColor: "white",
  },
  {
    id: "7",
    title: "Politics",
    icon: "🚨",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#FFA366",
    textColor: "w#EDEDED", 
  },
  {
    id: "8",
    icon: "👔",
    title: "Clothing",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#9ACDED",
    textColor: "yellow", },
  {
    id: "9",
    icon: "🗒",
    title: "Others",
    keyword: "keyword1, keyword2, keyword3",
    backgroundcolor: "#D0D0D0",
    textColor: "black", },
];
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ textColor, backgroundColor, item, onPress }: ItemProps) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor,flexDirection: "row" }]}
    >
      <View style={{ flexDirection: "column"}}>
        <Text style={[styles.title, {color:textColor}]}>{item.title}</Text>
        <Text style={[styles.keyword,{color:textColor}]}>{item.keyword}</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={[styles.icon,{color:textColor}]}>{item.icon}</Text>
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
    const textColor = item.id === selectedId ? item.textColor : item.textColor;

    return (
      <Item
        item={item}
        backgroundColor={backgroundColor}
        textColor={textColor}
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
    marginVertical:35,
    marginHorizontal:15,
    // justifyContent: "center",
    borderRadius: 10,
  
    
  },
  title: {
    marginHorizontal: 10,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  keyword: {
    margin: 5,
    fontSize: 15,
  },
  icon: {
    margin: 5,
    fontSize: 40,
  },
});
