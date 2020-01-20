import React from "react";
import { View, Text } from "react-native";

import CustomHeader from "../components/CustomHeader/CustomHeader";

export default function Home(props) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader navigation={props.navigation} />
      <Text>Welcome to About page</Text>
    </View>
  );
}
