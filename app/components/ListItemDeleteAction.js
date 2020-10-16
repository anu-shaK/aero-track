import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ListItemDeleteAction({ onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <MaterialCommunityIcons name="trash-can" size={30} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.delete,
    borderRadius: 1,
    padding: 5,
    marginTop: 11,
    marginBottom: 9,
    margin: 10,
  },
});
