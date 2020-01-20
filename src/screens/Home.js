import React, { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Card } from "react-native-paper";
import Constants from "expo-constants";
// import DateTimePicker from "@react-native-community/datetimepicker";

import CustomHeader from "../components/CustomHeader/CustomHeader";

export default function Home(props) {
  const [{ date, mode, show }, setDate] = useState({
    date: new Date(),
    mode: "date",
    show: false
  });

  const updateDate = (event, date) => {
    // newdate = date || date;

    setDate({
      show: Platform.OS === "ios" ? true : false,
      date
    });
  };

  const showDate = () => {
    setDate({
      show: true,
      mode: "date"
    });
  };

  const views = [
    {
      title: "Profile Views",
      count: "0",
      level: true
    },
    {
      title: "Search Appearances",
      count: "0",
      level: true
    },
    {
      title: "Search Views",
      count: "0",
      level: true
    },
    {
      title: "Services",
      count: "0"
    },
    {
      title: "Team members",
      count: "0"
    },
    {
      title: "Payment plans",
      count: "0"
    }
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight
      }}
    >
      <CustomHeader navigation={props.navigation} />
      <View style={styles.container}>
        <Text>Your profile has not been verified yet.</Text>
        <Text style={{ color: "#C30370" }}>How to get verified?</Text>
        <TouchableOpacity
          onPress={showDate}
          style={{
            borderWidth: 2,
            borderColor: "#aaa",
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <Text style={{ fontSize: 20, color: "#aaa" }}>Janauary 2020</Text>
          <Ionicons name="md-calendar" size={25} color="#aaa" />
        </TouchableOpacity>
        <View style={{ marginTop: 30 }}>
          {views.map((view, i) => (
            <Card
              key={i}
              style={{
                backgroundColor: "#ebeef5",
                marginBottom: 20,
                padding: "1.5rem"
              }}
            >
              <Text style={{ color: "#161F51", fontSize: "1.5rem" }}>
                {view.title}
              </Text>
              <Text
                style={{
                  color: "#363636",
                  fontSize: "2rem",
                  fontWeight: "600"
                }}
              >
                {view.count}
              </Text>

              {view.level ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  <FontAwesome name="level-up" size={25} color="#23d160" />
                  <Text style={{ color: "#23d160", fontSize: "1rem" }}>
                    {" "}
                    0%
                  </Text>
                </View>
              ) : (
                <Text></Text>
              )}
            </Card>
          ))}
        </View>
      </View>

      {/* {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={updateDate}
        />
      )} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
