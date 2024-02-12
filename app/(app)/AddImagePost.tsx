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

const AddImagePost = () => {
  // const handleAddPost = () => {
  //   router.navigate("./(tab)/home");    //direct go to home
  // };
  const handleAddPost = () => {
    router.push("addpost");
  };
  const [Title, setTitle] = React.useState("");
  const [Content, setContent] = React.useState("");
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
              source={require("../(app)/ProfileAssests/defaultimage.jpg")}
            />
          </TouchableOpacity>

          <TextInput
            variant="bodyMedium"
            mode="outlined"
            label="Card Content"
            value={Content}
            onChangeText={(Content) => setContent(Content)}
          />
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
export default AddImagePost;

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
});
