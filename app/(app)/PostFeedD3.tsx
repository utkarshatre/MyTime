import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Animated,
  SafeAreaView,
  Image,
} from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
type UserData = {
  id: string;
  name: string;
  username: string;
  profile: string;
  images: string;
  videos: string;

  caption: string;
};
export const DATA: UserData[] = [
  {
    id: "1",
    name: "Person 1",
    username: "abc",
    profile: require("./ProfileAssests/id1.jpg"),
    images: [require("./ProfileAssests/id1.jpg")],
    caption: "GoodMorning! with new stock",
  },
  {
    id: "2",
    name: "Person 2",
    username: "def",
    profile: require("./ProfileAssests/id2.jpg"),

    images: [require("./ProfileAssests/id2.jpg")],
    caption: "Grab it fast, all size available, #In Demand",
  },
  {
    id: "3",
    name: "Person 3",
    username: "ghi",
    profile: require("./ProfileAssests/id2.jpg"),

    videos: [require("./ProfileAssests/video1.mp4")],
    caption: "GoodMorning! with new stock",
  },
  {
    id: "4",
    name: "Person 4",
    username: "ghi",
    profile: require("./ProfileAssests/id1.jpg"),

    images: [require("./ProfileAssests/id3.jpg")],

    caption: "GoodMorning! with new stock",
  },
  {
    id: "5",
    name: "Person 5",
    username: "ghi",
    profile: require("./ProfileAssests/id1.jpg"),

    images: [
      require("./ProfileAssests/id2.jpg"),
      require("./ProfileAssests/id1.jpg"),
      require("./ProfileAssests/id2.jpg"),
    ],

    caption: "GoodMorning! with new stock",
  },
];
type ItemProps = {
  data: UserData;
  onPress: () => void;
  backgroundColor: string;
};

const Item = ({ data, onPress }: ItemProps) => (
  <Card style={styles.card}>
    <TouchableOpacity onPress={onPress}>
      <Card.Title
        style={styles.title}
        title={data.name}
        left={(props) => <Avatar.Icon {...props} icon={data.profile} />}
      />
      {data.images && data.images.length > 0 && (
        <Image style={styles.cover} source={{ uri: data.images[0] }} />
        // <Card.Cover style={styles.cover} source={{ uri: data.images[0] }} />
      )}
      {/* {data.videos && data.videos.length > 0 && (
        <Card.Cover source={data.videos[0]} />
        // <Card.Cover source={{ uri: data.videos[0] }} />
      )} */}

      <Card.Content>
        <Text variant="titleLarge" style={styles.name}>
          {data.name}
        </Text>
        <Text variant="bodyMedium" style={styles.caption}>
          {data.caption}
        </Text>
      </Card.Content>
    </TouchableOpacity>
  </Card>
);

const PostFeedD1 = () => {
  const [selectedid, setSelectedId] = useState<string>();
  const renderData = ({ item }: { item: UserData }) => {
    const backgroundColor = item.id === selectedid ? "white" : "black";
    return (
      <Item
        onPress={() => setSelectedId(item.id)}
        data={item}
        backgroundColor={backgroundColor}
      />
    );
  };
  return (
    // <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderData}
      keyExtractor={(data) => data.id}
      extraData={selectedid}
    />
    //  </SafeAreaView>
  );
};

export default PostFeedD1;
const styles = StyleSheet.create({
  container: {},
  card: {
    marginVertical: 5,
  },
  title: {
    margin: -10,
    alignContent: "center",
    fontSize: -10,
    fontWeight: "bold",
    color: "black",
  },
  cover: {
    height: 400,
  },
  name: {
    fontWeight: "bold",
  },
  caption: {
    // fontSize:13,
  },
});
