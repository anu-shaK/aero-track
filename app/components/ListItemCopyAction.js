import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ListItemCopyAction({ onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <MaterialCommunityIcons
        name="content-copy"
        size={25}
        color={colors.white}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.copy,
    borderRadius: 1,
    padding: 5,
    marginTop: 11,
    marginBottom: 9,
    margin: 10,
  },
});
