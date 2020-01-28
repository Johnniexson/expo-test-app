import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppContainer from "./src/AppContainer";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

export default function App(props) {
  const [notification, setNotification] = useState({});
  const _handleNotification = notification => {
    console.log("notify");
    setNotification({ notification: notification });
  };

  useEffect(() => {
    this._notificationSubscription = Notifications.addListener(
      _handleNotification
    );
  });

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight
      }}
    >
      <AppContainer />
    </ScrollView>
  );
}
