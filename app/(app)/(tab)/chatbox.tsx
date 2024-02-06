import { Tabs } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Text } from "react-native-paper";
import { GiftedChat } from "react-native-gifted-chat";
const ScreenOptions = () => {
  return (
    <Tabs.Screen
      options={{
        title: "chatbox",
      }}
    />
  );
};
export function ChatBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Person 1",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
const ChatScreen = () => {
  return (
    <>
      <ScreenOptions />
      <ChatBox />
    </>
  );
};
export default ChatScreen;
