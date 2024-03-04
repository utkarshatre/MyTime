import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  Chip,
  SegmentedButtons,
  TextInput,
} from "react-native-paper";
import { router } from "expo-router";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const AddImagePost = () => {
  // const [Title, setTitle] = React.useState("");
  const [Content, setContent] = React.useState("");
  const [Keywords, setKeywords] = React.useState([]);
  const apiUrl =
    "http://192.168.4.27:3000/users/kQUpGMpStgcd0Hp2JnSVQQlvEOh2/posts";
  const data = {
    caption: Content,
    images: "./ProfileAssests/id1.jpg",
    keywords: Keywords,
  };
  console.log(data);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const handlePost = async () => {
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        response.json();
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    handlePost();
  }, []);

  const handleCancel = () => {
    router.push("./home");
  };

  const handleChipPress = (keyword) => {
    // Add the clicked keyword to the Keywords state
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
              source={require("../(app)/ProfileAssests/defaultimage.jpg")}
            />
          </TouchableOpacity>

          <TextInput
            // variant="bodyMedium"
            mode="outlined"
            label="Caption"
            value={Content}
            onChangeText={(content) => setContent(content)}
          />
          <TextInput
            style={styles.keywords}
            // variant="titleLarge"
            label="Keywords"
            mode="outlined"
            value={Keywords.join(", ")} // Display joined keywords in TextInput
            onChangeText={(keywords) => setKeywords(keywords.split(", "))} // Update Keywords state when typing
          />
        </Card.Content>
        <View style={styles.chipContainer}>
          <Chip
            style={styles.chipchild}
            // style={{ margin: 10}}
            onPress={() => handleChipPress("Makeup Artist")}
          >
            Makeup Artist
          </Chip>
          <Chip
            style={styles.chipchild}
            // style={{ margin: 10 }}
            onPress={() => handleChipPress("Fitness")}
          >
            Fitness
          </Chip>
          <Chip
            style={styles.chipchild}
            // style={{ margin: 10 }}
            onPress={() => handleChipPress("Restaurants")}
          >
            Restaurants
          </Chip>
        </View>
        <Card.Actions>
          <Button onPress={handleCancel}>Cancel</Button>
          <Button onPress={handlePost}>Post Now</Button>
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
    marginVertical: 10,
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 1,
  },
  chipchild: {
    flexWrap: "wrap",
    alignItems: "center",
    margin: 1,
  },
});

export default AddImagePost;
