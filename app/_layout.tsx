import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
