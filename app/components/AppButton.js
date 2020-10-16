import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

export default function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.add }]}
      onPress={onPress}
    >
      <Text style={[styles.text, style]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    shadowColor: colors.medium,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    justifyContent: "center",
    borderRadius: 30,
    elevation: 10,
    flexDirection: "row",
    padding: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
    padding: 5,
    color: colors.white,
  },
});
