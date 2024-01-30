import { Stack, Tabs } from "expo-router";
const ScreenOptions = () => {
  return (
    <Stack.Screen
      options={{
        headerShown: false,
      }}
    />
  );
};
const AppLayout = () => {
  return (
    <>
      <ScreenOptions />
      <Stack
        screenOptions={
          {
            // headerShown: false ,
          }
        }
      >
        <Stack.Screen
          name="(tab)/home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="addpost" />
        {/* <Stack.Screen name="index" /> */}
      </Stack>
    </>
  );
};

export default AppLayout;
