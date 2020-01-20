import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const CustomHeader = ({ navigation }) => (
  <View style={[styles.container]}>
    {/* <Ionicons
      name="md-menu"
      size={32}
      color="black"
      onPress={() => navigation.openDrawer()}
    /> */}
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../../assets/logo.png")}
      />
    </TouchableOpacity>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>Theophilus</Text>
      <Image
        style={{ width: 30, height: 30, marginLeft: 5 }}
        source={{
          uri:
            "https://firebasestorage.googleapis.com/v0/b/uplanit-supplier.appspot.com/o/user.png?alt=media&token=5e7bf15d-4f9a-49ad-9b31-6e436a2230e5"
        }}
      />
    </View>
  </View>
);

export default CustomHeader;
