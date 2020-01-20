import React from "react";
import { View } from "react-native";
import { DrawerItems } from "react-navigation-drawer";

import styles from "./styles";

const CustomDrawerNavigator = props => (
  <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={"white"}
      activeTintColor={"#161F51"}
      inactiveTintColor={"white"}
      iconContainerStyle={styles.icons}
      {...props}
    />
  </View>
);

export default CustomDrawerNavigator;
