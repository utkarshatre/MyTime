import { Stack } from "expo-router";
import { FlatListComponent } from "react-native";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
      headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
