import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => <Icon {...props} name="home" />,
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          tabBarLabel: "Contacts",
          tabBarIcon: (props) => <Icon {...props} name="contacts" />,
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
