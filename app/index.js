import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "expo-router";
export default function Page() {
  const navigation = useNavigation();
  const HomePage = () => {
    navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Button
          icon="home"
          mode="contained"
          onPress={HomePage}
          style={{ margin: 50 }}
        ></Button>
        <HomePage/>
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
