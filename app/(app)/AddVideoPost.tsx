import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  Avatar,
  Button,
  Card,
  Chip,
  SegmentedButtons,
  TextInput,
} from "react-native-paper";
import { router } from "expo-router";
import home from "./(tab)/home";

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
  // const handleAddPost = () => {
  //   router.navigate("./(tab)/home");    //direct go to home
  // };
  const handleCancel = () => {
    router.push("./home");
  };
  const [Title, setTitle] = React.useState("");
  const [Content, setContent] = React.useState("");
  const [Keywords, setKeywords] = React.useState([]);

  const handleChipPress = (keyword) => {
    setKeywords((prevKeywords) => [...prevKeywords, keyword]);
  };
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
          <TouchableOpacity>
            <Card.Cover
              style={styles.image}
              source={require("../(app)/ProfileAssests/defaultvideo.png")}
            />
          </TouchableOpacity>

          <TextInput
            // variant="bodyMedium"
            mode="outlined"
            label="Caption"
            value={Content}
            onChangeText={(Content) => setContent(Content)}
          />
          <TextInput
            style={styles.keywords}
            // variant="titleLarge"
            label="Keywords"
            mode="outlined"
            value={Keywords.join(", ")} // Display joined keywords in TextInput
            onChangeText={(keywords) => setKeywords(keywords.split("."))} // Update Keywords state when typing
          />
        </Card.Content>
        <View style={styles.chipContainer}>
          <Chip
            style={{ margin: 10 }}
            onPress={() => handleChipPress("keyword1")}
          >
            keyword1
          </Chip>
          <Chip
            style={{ margin: 10 }}
            onPress={() => handleChipPress("keyword2")}
          >
            keyword2
          </Chip>
          <Chip
            style={{ margin: 10 }}
            onPress={() => handleChipPress("keyword3")}
          >
            keyword3
          </Chip>
        </View>
        <Card.Actions>
          <Button onPress={handleCancel}>Cancel</Button>
          <Button onPress={() => ""}>Post Now</Button>
        </Card.Actions>
      </ScrollView>
    </Card>
  );
};
export default AddVideoPost;

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
    marginVertical: 10,
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
});
