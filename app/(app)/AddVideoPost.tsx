import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  SegmentedButtons,
  TextInput,
} from "react-native-paper";
import { router } from "expo-router";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const SegmentButton = () => {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container1}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "filter",
            label: "Filter1",
          },
          {
            value: "train",
            label: "Filter2",
          },
          { value: "drive", label: "Filter3" },
        ]}
      />
    </SafeAreaView>
  );
};

const AddVideoPost = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [segmentValue, setSegmentValue] = useState("");

  const handleAddPost = () => {
    router.push("../(tab)/home");
  };
  // const handleAddPost = () => {
  //   router.push("addpost");
  // };

  return (
    <Card style={styles.card}>
      <ScrollView>
        <View style={styles.top}>
          <Card.Title title="Person 1" subtitle="location" left={LeftContent} />

          <Button
            style={{
              borderRadius: 50,
              width: 100,
              padding: 0,
              marginRight: 20,
            }}
            onPress={() => ""}
            icon="image"
            mode="elevated"
          >
            Galary
          </Button>
        </View>
        <Card.Content style={styles.content}>
          <TextInput
            variant="titleLarge"
            label="CardTitle"
            mode="outlined"
            value={Title}
            onChangeText={(title) => setTitle(title)}
          />
          <TouchableOpacity>
            <Card.Cover
              style={styles.image}
              source={require("../(app)/ProfileAssests/defaultvideo.png")}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.keywords}
            variant="titleLarge"
            label="Keywords"
            mode="outlined"
            value={Title}
            onChangeText={(Title) => setTitle(Title)}
          />
        </Card.Content>
        <SegmentButton />
        <Card.Actions>
          <Button onPress={handleAddPost}>Cancel</Button>
          <Button onPress={() => ""}>Post Now</Button>
        </Card.Actions>
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 130,
    marginHorizontal: 15,
    justifyContent: "center",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 40,
    marginBottom: 10,
  },
  content: {
    margin: 20,
  },
  container1: {
    alignItems: "center",
    margin: 10,
  },
  keywords: {
    marginTop: 20,
    height: 40,
  },
  image: {
    marginTop: 20,
  },
});

export default AddVideoPost;
