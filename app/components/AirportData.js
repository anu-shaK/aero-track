import React, { useContext } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import themeContext from "../config/themeContext";

export default function AirportData({
  title,
  value,
  renderRightActions,
  renderLeftActions,
}) {
  const theme = useContext(themeContext);
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <View style={[styles.container, { backgroundColor: theme.card }]}>
        <AppText style={[styles.title, { color: theme.color }]}>
          {title}
        </AppText>
        <TextInput
          style={[styles.value, { color: theme.color }]}
          editable={false}
        >
          {value}
        </TextInput>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 10,
    // backgroundColor: colors.white,
    marginTop: 10,
    margin: 5,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.medium,
  },
});
