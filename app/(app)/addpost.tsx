import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { Button } from "react-native-paper";

const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "addpost",
      }}
    />
  );
};

const handleAddVideoPost = () => {
  router.push("AddVideoPost");
};

const handleAddImagePost = () => {
  router.push("AddImagePost");
};

const ButtonForImage = () => (
  <Button
    icon="camera"
    mode="contained"
    onPress={handleAddImagePost}
    style={styles.button}
  >
    To Add Image
  </Button>
);

const ButtonForVideo = () => (
  <Button
    icon="camera"
    mode="contained"
    onPress={handleAddVideoPost}
    style={styles.button}
  >
    To Add Video
  </Button>
);

const addpost = () => {
  return (
    <>
      <ScreenOptions />
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Add To Post</Text>
          <View style={styles.button}>
            <ButtonForImage />
            <ButtonForVideo />
          </View>
          {/* <Addpost /> */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default addpost;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
  },
});
