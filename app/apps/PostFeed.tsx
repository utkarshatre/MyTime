import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Video, ResizeMode } from "expo-av";
import React, { useRef } from "react";
import { ScrollView } from "react-native";

export const UserData = [
  {
    id: "1",
    name: "Person 1",
    username: "abc",
    profile: require("./ProfileAssests/id1.jpg"),

    post: {
      image: require("./ProfileAssests/id1.jpg"),
      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "2",
    name: "Person 2",
    username: "def",
    profile: require("./ProfileAssests/id2.jpg"),

    post: {
      image: require("./ProfileAssests/id2.jpg"),
      caption: "Grab it fast, all size available, #In Demand",
    },
  },
  {
    id: "3",
    name: "Person 3",
    username: "ghi",
    profile: require("./ProfileAssests/id2.jpg"),

    post: {
      video: require("./ProfileAssests/video1.mp4"),
      caption: "GoodMorning! with new stock",
    },
  },
  {
    id: "4",
    name: "Person 4",
    username: "ghi",
    profile: require("./ProfileAssests/id3.jpg"),

    post: {
      image: require("./ProfileAssests/id3.jpg"),
      caption: "GoodMorning! with new stock",
    },
  },
];

const PostFeed = () => {
  const screenWidth = Dimensions.get("window").width;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const screenHeight = Dimensions.get("window").height;
  return (
    <ScrollView>
      {UserData.map((item) => (
        <TouchableOpacity key={item.id} style={{ margin: 2 }}>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  paddingHorizontal: 8,
                  marginBottom: 8,
                }}
                source={item.profile}
              />
              <Text
                style={{
                  paddingLeft: 10,
                  paddingBottom: 2,
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {item.name}
              </Text>
            </View>
            <View>
              {item.post.image && (
                <Image
                  style={{
                    borderRadius: 20,
                    width: screenWidth,
                    height: 300,
                  }}
                  source={item.post.image}
                />
              )}
              {item.post.video && (
                <Video
                  ref={video}
                  style={{
                    borderRadius: 20,
                    width: screenWidth,
                    height: 300,
                  }}
                  source={item.post.video}
                  useNativeControls
                  resizeMode={ResizeMode.CONTAIN}
                  isLooping
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
              )}
            </View>
            <View>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
              <Text>{item.post.caption}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default PostFeed;

const styles = StyleSheet.create({});

// import React, { useRef } from "react";
// import {
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import Video from "react-native-video";

// export const UserData = [
//   {
//     id: "1",
//     name: "Person 1",
//     username: "abc",
//     profile: require("./ProfileAssests/id1.jpg"),
//     post: {
//       image: require("./ProfileAssests/id1.jpg"),
//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "2",
//     name: "Person 2",
//     username: "def",
//     profile: require("./ProfileAssests/id2.jpg"),
//     post: {
//       image: require("./ProfileAssests/id2.jpg"),
//       caption: "Grab it fast, all sizes available, #In Demand",
//     },
//   },
//   {
//     id: "3",
//     name: "Person 3",
//     username: "ghi",
//     profile: require("./ProfileAssests/id2.jpg"),
//     post: {
//       video: require("./ProfileAssests/video1.mp4"),
//       caption: "GoodMorning! with new stock",
//     },
//   },
//   {
//     id: "4",
//     name: "Person 4",
//     username: "ghi",
//     profile: require("./ProfileAssests/id3.jpg"),
//     post: {
//       image: require("./ProfileAssests/id3.jpg"),
//       caption: "GoodMorning! with new stock",
//     },
//   },
// ];

// const PostFeed = () => {
//   const screenWidth = Dimensions.get("window").width;
//   const videoRef = useRef(null);

//   const onBuffer = (e) => {
//     console.log("buffering", e);
//   };

//   const onError = (e) => {
//     console.log("error", e);
//   };

//   return (
//     <ScrollView>
//       {UserData.map((item) => (
//         <TouchableOpacity key={item.id} style={{ marginTop: 1 }}>
//           <View style={{ marginTop: 10 }}>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Image
//                 style={{
//                   height: 30,
//                   width: 30,
//                   borderRadius: 15,
//                   paddingHorizontal: 8,
//                   marginBottom: 8,
//                 }}
//                 source={item.profile}
//               />
//               <Text
//                 style={{
//                   paddingLeft: 10,
//                   paddingBottom: 2,
//                   fontSize: 16,
//                   fontWeight: "bold",
//                   color: "black",
//                 }}
//               >
//                 {item.name}
//               </Text>
//             </View>
//             <View>
//               {item.post.video ? (
//                 <Video
//                   style={{
//                     borderRadius: 20,
//                     width: screenWidth,
//                     height: 300,
//                   }}
//                   source={item.post.video}
//                   ref={videoRef}
//                   onBuffer={onBuffer}
//                   onError={onError}
//                   resizeMode="cover"
//                   controls={true}
//                 />
//               ) : (
//                 <Image
//                   style={{
//                     borderRadius: 20,
//                     width: screenWidth,
//                     height: 300,
//                   }}
//                   source={item.post.image}
//                 />
//               )}
//             </View>
//             <View>
//               <Text
//                 style={{
//                   color: "black",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {item.name}
//               </Text>
//               <Text>{item.post.caption}</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// export default PostFeed;

// const styles = StyleSheet.create({});
