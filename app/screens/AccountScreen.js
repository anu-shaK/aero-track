import React, { useState, useContext } from "react";
import { StyleSheet, Text, Image, Platform, Switch, View } from "react-native";
import { EventRegister } from "react-native-event-listeners";

import colors from "../config/colors";
import Screen from "../components/Screen";
import themeContext from "../config/themeContext";

export default function AccountScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);

  return (
    <Screen style={[styles.screen, { backgroundColor: theme.background }]}>
      <Text style={[styles.head, { color: theme.color }]}>AeroTrack</Text>
      <Image
        style={styles.image}
        source={
          theme.theme === "dark"
            ? require("../assets/airplane-white.png")
            : require("../assets/airplane.png")
        }
      />
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, { color: theme.color }]}>Light</Text>
        <Switch
          trackColor={{ false: colors.light, true: colors.add }}
          thumbColor={darkMode ? colors.dark : colors.light}
          style={styles.switch}
          onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit("changeTheme", value);
          }}
          value={darkMode}
        />
        <Text style={[styles.switchText, { color: theme.color }]}>Dark</Text>
      </View>
      <View style={styles.footerArea}>
        <Text style={[styles.footer, { color: theme.lightColor }]}>
          Version: 1.0.0
        </Text>
        <Text style={[styles.footer, { color: theme.lightColor }]}>
          AeroTrack © 2020
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: colors.background,
  },
  head: {
    paddingBottom: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  image: {
    width: 60,
    height: 60,
    opacity: 0.6,
    paddingBottom: 20,
    marginBottom: 40,
  },
  switchText: {
    paddingTop: 25,
    marginTop: 25,
    margin: 8,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
  },
  switch: {
    paddingTop: 30,
    marginTop: 30,
  },
  footerArea: {
    paddingTop: 20,
    marginTop: 40,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footer: {
    //color: colors.medium,
    paddingTop: 10,
  },
});
