import { StyleSheet, Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { router } from "expo-router";
export default function Page() {
  const handleHomePress = () => {
    router.push("/apps/home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <IconButton
          icon="home"
          mode="contained"
          onPress={handleHomePress}
          style={{ margin: 50 }}
        ></IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
