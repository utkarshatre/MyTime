import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { View, ViewBase } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const RootLayout = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  const login = () => {
    auth
      .signInWithEmailAndPassword("utkarsh01@gmail.com", "utkarsh@01")
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <TextInput
          placeholder="email"
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          mode="contained"
          onPress={() => {
            console.log("Pressed");
            login();
          }}
        >
          Log In
        </Button>
        <Text>Login</Text>
      </View>
    );
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(app)/(tab)/home"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen name="(app)/addpost" /> */}
      {/* <Stack.Screen name="index" />  */}
    </Stack>
  );
};

export default RootLayout;
