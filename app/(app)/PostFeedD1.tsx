import React, { FC, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Button,
} from "react-native";
import { Avatar, Card, Text, Title } from "react-native-paper";
import { ImageSourcePropType } from "react-native";
import { AVPlaybackSource, Video } from "expo-av";
import { SliderBox } from "react-native-image-slider-box";
import { router } from "expo-router";

type UserData = {
  id: string;
  name: string;
  username: string;
  profile: any;
  images: ImageSourcePropType[];
  videos: any;
  caption: string;
};

export const DATA: UserData[] = [
  {
    id: "1",
    name: "Person 1",
    username: "abc",
    profile: require("./ProfileAssests/id1.jpg"),
    images: [require("./ProfileAssests/id1.jpg")],
    caption: "Good Morning! with new stock",
    videos: [],
  },
  {
    id: "2",
    name: "Person 2",
    username: "def",
    profile: require("./ProfileAssests/id2.jpg"),
    images: [require("./ProfileAssests/id2.jpg")],
    caption: "Grab it fast, all sizes available, #In Demand",
    videos: [],
  },
  {
    id: "3",
    name: "Person 3",
    username: "ghi",
    profile: require("./ProfileAssests/id2.jpg"),
    images: [],
    videos: [
      {
        uri: "https://firebasestorage.googleapis.com/v0/b/mytimeapp-2ab16.appspot.com/o/video1.mp4?alt=media&token=076cbb98-0512-4bcf-9e54-ec3e8c716475",
      },
    ],
    caption: "Good Morning! with new stock",
  },
  {
    id: "4",
    name: "Person 4",
    username: "ghi",
    profile: require("./ProfileAssests/id1.jpg"),
    images: [require("./ProfileAssests/id3.jpg")],
    caption: "Good Morning! with new stock",
    videos: [],
  },
  {
    id: "5",
    name: "Person 5",
    username: "ghi",
    profile: require("./ProfileAssests/id1.jpg"),
    images: [
      require("./ProfileAssests/id2.jpg"),
      require("./ProfileAssests/id1.jpg"),
      require("./ProfileAssests/id3.jpg"),
    ],
    caption: "Good Morning! with new stock",
    videos: [],
  },
];

type ItemProps = {
  data: UserData;
  onPress: () => void;
};

const SPACING = 5;
const ITEM_LENGTH = Dimensions.get("window").width - 20;
const ITEM_HEIGHT = Dimensions.get("screen").width;
const BORDER_RADIUS = 20;

const ImageCarousel: FC<{ images: ImageSourcePropType[] }> = ({ images }) => (
  <FlatList
    data={images}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(index) => index.toString()}
    renderItem={({ item }) => <Image source={item} style={styles.image} />}
  />
);

const VideoSection: FC<{ videos: AVPlaybackSource[] }> = ({ videos }) => (
  <FlatList
    data={videos}
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    //  keyExtractor={(item, index) => index.toString()}
    keyExtractor={(index) => index.toString()}
    renderItem={({ item }) => (
      <Video source={item} style={[styles.video]} useNativeControls />
    )}
  />
);
const handleProfile =()=>{
  router.push("../(tab)/profile"); 
}
const Item: FC<ItemProps> = ({ data, onPress }) => (
  <Card onPress={handleProfile} style={styles.card}>
    <Card.Title
      title={data.name}
      left={(props) => <Avatar.Icon {...props} icon={data.profile} />}
    />
    {data.videos.length > 0 ? (
      <VideoSection videos={data.videos} />
    ) : (
      <SliderBox images={data.images} dotColor="orange" style={styles.image} />
      // <ImageCarousel images={data.images}/>
    )}

    <Card.Content>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.caption}>{data.caption}</Text>
    </Card.Content>
  </Card>
);

const PostFeedD1: FC = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const renderData = ({ item }: { item: UserData }) => {
    const backgroundColor = item.id === selectedId ? "white" : "black";
    return <Item onPress={() => setSelectedId(item.id)} data={item} />;
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderData}
      keyExtractor={(data) => data.id}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
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
  },
  video: {
    paddingHorizontal: 10,
    width: ITEM_LENGTH,
    height: ITEM_HEIGHT,
    borderRadius: BORDER_RADIUS,
    resizeMode: "contain",
  },
});

export default PostFeedD1;
