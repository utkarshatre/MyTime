import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import { router } from "expo-router";
export default function Page() {
  const handleHomePress = () => {
    router.push("/(app)/(tab)/home");
  };
  const handleAddPostPress = () => {
    router.push("/(app)/addpost");
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
        <IconButton
          icon="plus"
          mode="contained"
          onPress={handleAddPostPress}
          style={{ margin: 50 }}
        ></IconButton>
        <View></View>
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

// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, FlatList, Text } from "react-native";

// import database from "@react-native-firebase/database";

// export default function Page() {
//   const [myData, setMyData] = useState("");

//   const readData = async () => {
//     database()
//       .ref("/users/")
//       .on("value", (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           const dataArray = Object.keys(data).map((key) => ({
//             id: key,
//             ...data[key],
//           }));
//           setMyData(dataArray);
//         }
//       });
//   };

//   useEffect(() => {
//     readData();
//   }, []);

//   const RenderOnFlat = ({ item }) => (
//     <View>
//       <Text>Name: {item.name}</Text>
//       <Text>Age: {item.age}</Text>
//       <Text>ID: {item.id}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>

//         <FlatList
//           data={myData}
//           renderItem={({ item }) => <RenderOnFlat item={item} />}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
