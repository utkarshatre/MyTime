// import {
//   FlatList,
//   Image,
//   ImageSourcePropType,
//   Linking,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import React, { FC, useEffect, useState } from "react";
// import { Banner, Button, Chip, Icon } from "react-native-paper";
// import PostFeedD1 from "../PostFeedD1";
// // import { db, analytics, collection, getDocs } from "../../../firebase";
// import firestore from "@react-native-firebase/firestore";
// import { auth } from "../../../firebase";
// import { Tabs } from "expo-router";
// const Item = ({ item }) => {
//   const [visible, setVisible] = React.useState(true);

//   const handleCallPress = () => {
//     Linking.openURL(`tel:${item.contact}`);
//   };
//   return (
//     <SafeAreaView>
//       <View style={styles.container1}>
//         <Banner visible={visible} style={styles.containerbanner}>
//           <View style={styles.containerprofile}>
//             <View style={styles.profile}>
//               <Image style={styles.profileimage} source={item.profilepicture} />
//               <View style={styles.profiletext}>
//                 <Text style={styles.nameut}>{item.name}</Text>
//                 <Text> {auth.currentUser.email}</Text>
//                 <Text style={styles.aboutut}>{item.about}</Text>
//                 <View style={styles.contactut}>
//                   <Button
//                     icon="phone"
//                     mode="text"
//                     onPress={() => {
//                       handleCallPress();
//                       console.log("Pressed");
//                     }}
//                   >
//                     Call me!
//                   </Button>
//                   <Button
//                     icon="message"
//                     mode="text"
//                     onPress={() => {
//                       console.log("Pressed");
//                     }}
//                   >
//                     Ping Me!
//                   </Button>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </Banner>
//         <ScrollView style={styles.containerut}>
//           {/* <PostFeedD1 /> */}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };

// const Profile = () => {
//   const [profilePostFeedData, setprofilePostFeedData] = useState([]);
//   const getProfilePostFeed = async () => {
//     const querySnapshot = await firestore().collection("users").get();
//     const postData = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     console.log(postData);
//     setprofilePostFeedData(postData);
//   };
//   useEffect(() => {
//     getProfilePostFeed();
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={profilePostFeedData}
//         renderItem={({ item }) => <Item item={item} />}
//         keyExtractor={(item) => item.id}
//         extraData={setprofilePostFeedData}
//       />
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container1: {},
//   containerprofile: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     height: "100%",
//     flex: 1,
//   },
//   profile: {
//     marginTop: 50,
//     flexDirection: "row",
//   },
//   profileimage: {
//     marginLeft: 10,
//     borderRadius: 150,
//     height: 110,
//     width: 110,
//   },
//   profiletext: {
//     height: 110,
//     width: "100%",
//     flexDirection: "column",
//     marginLeft: 15,
//   },
//   nameut: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   aboutut: {
//     width: 200,
//     fontSize: 14,
//   },
//   contactut: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//   },
//   containerbanner: {},
//   containerut: {
//     marginLeft: 10,
//   },
//   imageut: {
//     width: 120,
//     height: 120,
//     borderRadius: 20,
//     margin: 10,
//   },
//   imageRowut: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// });

import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { Banner, Button, Chip, Searchbar } from "react-native-paper";
import PostFeedD1 from "../PostFeedD1";

type UserData = {
  idut: string;
  nameut: string;
  aboutut: string;
  imageut: ImageSourcePropType[];
  profileut: ImageSourcePropType;
};

export const DATA: UserData[] = [
  {
    idut: "1",
    nameut: "Profile1",
    aboutut: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageut: [
      require("../ProfileAssests/id1.jpg"),
      require("../ProfileAssests/id2.jpg"),
      require("../ProfileAssests/id3.jpg"),
      require("../ProfileAssests/id2.jpg"),
      require("../ProfileAssests/id3.jpg"),
      require("../ProfileAssests/id1.jpg"),
      require("../ProfileAssests/id2.jpg"),
      require("../ProfileAssests/id3.jpg"),
      require("../ProfileAssests/id2.jpg"),
      require("../ProfileAssests/id3.jpg"),
    ],
    profileut: require("../ProfileAssests/id1.jpg"),
  },
];

type ItemProps = {
  item: UserData;
  onPress: () => void;
};

// const HorizontalScrollView = ({ titleut, imagesut }) => (
//   <View>
//      <Text style={styles.aboutut}>{titleut}</Text>
//     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//       <View style={styles.imageRowut}>
//         {imagesut.map((imgut, indexut) => (
//           <Image key={indexut} source={imgut} style={styles.imageut} />
//         ))}
//       </View>
//     </ScrollView>
//   </View>
// );
const ITEM_LENGTH = Dimensions.get("screen").width - 10;
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};
const HorizontalScrollView = ({ titleut, imagesut }) => (
  <View>
   

    <ScrollView>
      <View style={styles.parent}>
        {imagesut.map((imgut, indexut) => (
          <Image key={indexut} source={imgut} style={styles.child} />
        ))}
      </View>
    </ScrollView>
  </View>
);

const Item = ({ item }: ItemProps) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container1}>
       
          <View style={styles.containerSearchBox}>
         <SearchBar  />
         </View>
        {/* <ScrollView style={styles.containerut}> */}
         
          <HorizontalScrollView titleut={item.nameut} imagesut={item.imageut} />
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const Profile = () => {
  const [selectedIdut, setSelectedIdut] = useState<string | null>(null);

  const renderItem = (item: UserData) => {
    const backgroundColor = item.idut === selectedIdut ? "CDB7F6" : "white";

    return (
      <View style={{ backgroundColor }}>
        <Item item={item} />
      </View>
    );
  };

  return <View>{DATA.map(renderItem)}</View>;
};

export default Profile;

const styles = StyleSheet.create({
  container1: {},
  containerprofile: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  profile: {
    marginTop: 50,
    flexDirection: "row",
  },
  profileimage: {
    marginLeft: 10,
    borderRadius: 150,
    height: 110,
    width: 110,
  },
  profiletext: {
    height: 110,
    width: "100%",
    flexDirection: "column",
    marginLeft: 15,
  },
  nameut: {
    fontSize: 30,
    fontWeight: "bold",
  },
  aboutut: {
    width: 200,
    fontSize: 14,
  },
  contactut: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  containerbanner: {},
  containerut: {
    marginHorizontal: 1,
  },
  parent: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    marginHorizontal: 5, //1
    marginTop: 10, //1
    marginBottom: 60, //1
    // marginHorizontal: 20,  //2
    // // marginTop: 10,   //2
    // margin: 60,   //2
  },
  child: {
    // width: 120,  //1
    // height: 120,  //1
    width: 175, //2
    height: 175, //2
    borderRadius: 10,
    margin: 5,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerSearchBox: {
    marginTop: 35, //3 for search bar
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // height: 30,
    width: 330,
  },
});

{
  /* <HorizontalScrollView
              titleut="On Demands"
              imagesut={item.imageut}
            />
            <HorizontalScrollView titleut="Trendings" imagesut={item.imageut} />
            <HorizontalScrollView
              titleut="Live Offers"
              imagesut={item.imageut}
            /> */
}

// profileut: {
//   flexDirection: "row",
//   justifyContent: "center",

//   borderRadius: 150,
//   marginHorizontal: 120,
//   marginTop: 20,
//   marginBottom: 10,                //for profile screentab only without call and message button
//   height: 110,
//   width: 110,
// },
// nameut: {
//   fontSize: 20,
//   fontWeight: "bold",
//   marginLeft: 140,
// },
// aboutut: {
//   fontSize: 14,
//   padding: 6.5,
// },

// imageRow: {
//   flexDirection: "row",
//   justifyContent: "space-between",
// },
{
  /* <View style={styles.imageRow}>
            {item.image.map((img, index) => (
              <Image key={index} source={img} style={styles.image} />
            ))}
          </View> */
}

//FIRST TIME DESIGN
// import { ResizeMode, Video } from "expo-av";
// import { Tabs } from "expo-router";
// import React, { FC, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
// } from "react-native";
// import { Banner } from "react-native-paper";

// export const UserData = [
//   {
//     id: "1",
//     name: "Person 1",
//     username: "abc",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id1.jpg"),
//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "2",
//     name: "Person 2",
//     username: "def",
//     profile: require("../ProfileAssests/id2.jpg"),

//     post: {
//       image: require("../ProfileAssests/id2.jpg"),
//       caption: "Grab it fast, all size available, #In Demand",
//     },
//   },
//   {
//     id: "3",
//     name: "Person 3",
//     username: "ghi",
//     profile: require("../ProfileAssests/id2.jpg"),

//     post: {
//       video: require("../ProfileAssests/video1.mp4"),
//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "4",
//     name: "Person 4",
//     username: "ghi",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id3.jpg"),

//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "5",
//     name: "Person 5",
//     username: "ghi",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id3.jpg"),

//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "6",
//     name: "Person 5",
//     username: "ghi",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id1.jpg"),

//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "7",
//     name: "Person 5",
//     username: "ghi",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id3.jpg"),

//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "8",
//     name: "Person 5",
//     username: "ghi",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id2.jpg"),

//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "9",
//     name: "Person 5",
//     username: "ghi",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id1.jpg"),

//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "10",
//     name: "Person 5",
//     username: "ghi",
//     profile: require("../ProfileAssests/id1.jpg"),

//     post: {
//       image: require("../ProfileAssests/id3.jpg"),
//       caption: "GoodMorning! with new stock",
//     },
//   },

// ];

// const PostFeed = () => {
//   const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});

//   return (
//     <ScrollView>
//       {UserData.map((item) => (
//         <TouchableOpacity key={item.id} style={{ marginLeft:50, marginBottom:30,}}>
//           <View>
//             {/* flatlist */}
//             <View style={{ flexDirection: "row", alignItems: "center" }}></View>
//             <View>
//               {item.post.image && (
//                 <Image
//                   style={{
//                    borderRadius:20,
//                     width:300,
//                     height: 200,
//                   }}
//                   source={item.post.image}
//                 />
//               )}

//               {item.post.video && (
//                 <Video
//                   ref={video}
//                   style={{
//                     borderRadius:20,
//                     width:300,
//                     height: 200,
//                   }}
//                   source={item.post.video}
//                   useNativeControls
//                   resizeMode={ResizeMode.STRETCH}

//                 />
//               )}
//             </View>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// const ScreenOptions = () => {
//   return (
//     <Tabs.Screen
//       options={{
//         title: "profile",
//       }}
//     />
//   );
// };

// const ProfileScreen = () => {
//   return (
//     <>
//       <ScreenOptions />

//       <TouchableOpacity style={styles.item}>
//         <View style={styles.imageContainer}>
//           <Image
//             style={styles.image}
//             source={require("../ProfileAssests/id1.jpg")}
//           />
//         </View>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Profile 1</Text>
//           <Text style={styles.keyword}>
//             Information about the people and companies you do business with
//           </Text>
//         </View>
//       </TouchableOpacity>
//       <PostFeed />
//     </>
//   );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   item: {
//     marginVertical: 60,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   titleContainer: {
//     flex: 1,
//   },
//   title: {
//     marginTop: 5,
//     textAlign: "left",
//     fontWeight: "bold",
//     fontSize: 40,
//   },
//   imageContainer: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   keyword: {
//     margin: 5,
//     fontSize: 15,
//   },
//   image: {
//     margin: 15,
//     height: 110,
//     width: 110,
//     borderRadius: 100,
//   },
//   below: {
//     // Customize the styling for the section below the main item container
//   },
// });
