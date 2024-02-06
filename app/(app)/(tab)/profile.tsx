import { ResizeMode, Video } from "expo-av";
import { Tabs } from "expo-router";
import React, { FC, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Banner } from "react-native-paper";

export const UserData = [
  {
    id: "1",
    name: "Person 1",
    username: "abc",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id1.jpg"),
      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "2",
    name: "Person 2",
    username: "def",
    profile: require("../ProfileAssests/id2.jpg"),

    post: {
      image: require("../ProfileAssests/id2.jpg"),
      caption: "Grab it fast, all size available, #In Demand",
    },
  },
  {
    id: "3",
    name: "Person 3",
    username: "ghi",
    profile: require("../ProfileAssests/id2.jpg"),

    post: {
      video: require("../ProfileAssests/video1.mp4"),
      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "4",
    name: "Person 4",
    username: "ghi",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id3.jpg"),

      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "5",
    name: "Person 5",
    username: "ghi",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id3.jpg"),

      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "6",
    name: "Person 5",
    username: "ghi",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id1.jpg"),

      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "7",
    name: "Person 5",
    username: "ghi",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id3.jpg"),

      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "8",
    name: "Person 5",
    username: "ghi",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id2.jpg"),

      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "9",
    name: "Person 5",
    username: "ghi",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id1.jpg"),

      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "10",
    name: "Person 5",
    username: "ghi",
    profile: require("../ProfileAssests/id1.jpg"),

    post: {
      image: require("../ProfileAssests/id3.jpg"),
      caption: "GoodMorning! with new stock",
    },
  },

];

const PostFeed = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <ScrollView>
      {UserData.map((item) => (
        <TouchableOpacity key={item.id} style={{ marginLeft:50, marginBottom:30,}}>
          <View>
            {/* flatlist */}
            <View style={{ flexDirection: "row", alignItems: "center" }}></View>
            <View>
              {item.post.image && (
                <Image
                  style={{
                   borderRadius:20,
                    width:300,
                    height: 200,
                  }}
                  source={item.post.image}
                />
              )}

              {item.post.video && (
                <Video
                  ref={video}
                  style={{
                    borderRadius:20,
                    width:300,
                    height: 200,
                  }}
                  source={item.post.video}
                  useNativeControls
                  resizeMode={ResizeMode.STRETCH}
                
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "profile",
      }}
    />
  );
};

const ProfileScreen = () => {
  return (
    <>
      <ScreenOptions />

      <TouchableOpacity style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../ProfileAssests/id1.jpg")}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Profile 1</Text>
          <Text style={styles.keyword}>
            Information about the people and companies you do business with
          </Text>
        </View>
      </TouchableOpacity>
      <PostFeed />
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  item: {
    marginVertical: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    marginTop: 5,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 40,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  keyword: {
    margin: 5,
    fontSize: 15,
  },
  image: {
    margin: 15,
    height: 110,
    width: 110,
    borderRadius: 100,
  },
  below: {
    // Customize the styling for the section below the main item container
  },
});
