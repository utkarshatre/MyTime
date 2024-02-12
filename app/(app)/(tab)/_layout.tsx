import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => <Icon {...props} name="home" />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          // href: null,
          tabBarLabel: "Contacts",
          tabBarIcon: (props) => <Icon {...props} name="contacts" />,
        }}
      />
      <Tabs.Screen
        name="addpost"
        options={{
          // href: null,
          tabBarLabel: "Add Post",
          tabBarIcon: (props) => {
            return <Icon {...props} name="plus-circle" />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (props) => <Icon {...props} name="account-circle" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: (props) => <Icon {...props} name="cog" />,
        }}
      />
    </Tabs>
  );
};

export default _layout;
