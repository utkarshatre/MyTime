import { Stack } from "expo-router";

const RootLayout = () => {
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
      <Stack.Screen name="(app)/addpost" />
    <Stack.Screen name="index" /> 
    </Stack>
  );
};

export default RootLayout;
