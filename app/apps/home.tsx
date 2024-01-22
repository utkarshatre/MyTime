import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Icon, Searchbar } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";

const home = () => {
  const Tab = createBottomTabNavigator();
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View>
      <View style={styles.header}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Connect with NearBy People."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <Button
          style={styles.icon}
          icon="phone"
          mode="contained"
          onPress={() => console.log("Pressed")}
        ></Button>
      </View>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.storiesContainer}>
            <View style={styles.storiesProfile}>
              <Text style={styles.storiesText}>All</Text>
            </View>
            <View style={styles.storiesProfile}>
              <Text>All</Text>
            </View>
            <View style={styles.storiesProfile}>
              <Text>All</Text>
            </View>
            <View style={styles.storiesProfile}>
              <Text>All</Text>
            </View>
            <View style={styles.storiesProfile}>
              <Text>All</Text>
            </View>
            <View style={styles.storiesProfile}>
              <Text>All</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.navbarbottom}>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
          }}
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
              navigationState={state}
              safeAreaInsets={insets}
              onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
              }}
              renderIcon={({ route, focused, color }) => {
                const { options } = descriptors[route.key];
                if (options.tabBarIcon) {
                  return options.tabBarIcon({ focused, color, size: 24 });
                }

                return null;
              }}
              getLabelText={({ route }) => {
                const { options } = descriptors[route.key];
                const label =
                  options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.title;

                return label;
              }}
            />
          )}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="contact"
            component={ContactScreen}
            options={{
              tabBarLabel: "contact",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="contacts" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "profile",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="account-circle" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => {
                return <Icon name="cog" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};
function HomeScreen() {
  return (
    <View style={styles.navbarbottom}>
      <Text>Home!</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={styles.navbarbottom}>
      <Text varient="headlineMedium">Contant</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.navbarbottom}>
      <Text varient="headlineMedium">Profile</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.navbarbottom}>
      <Text variant="headlineMedium">Settings</Text>
    </View>
  );
}
export default home;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
    padding: 2,
    margin: 10,
  },
  icon: {
    marginLeft: 15,
    padding: 3,
    borderRadius: 100,
  },
  storiesContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  navbarbottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchbar: {
    borderRadius: 2,
    height: 50,
    width: 330,
  },
  storiesProfile: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 3,
    borderColor: "black",
    marginRight: 10,
    allignItems: "center",
    justifyContent: "center",
  },
  storiesText: {
    textAlign: "center",
    justifyContent: "center",
  },

  top: {
    allignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
});
