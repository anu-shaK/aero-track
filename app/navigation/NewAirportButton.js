import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import themeContext from "../config/themeContext";

export default function NewAirportButton({ onPress }) {
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity>
      <View style={[styles.container, { borderColor: theme.addButton }]}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={theme.addButton}
          size={40}
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.add,
    borderRadius: 40,
    width: 80,
    height: 80,
    bottom: 30,
    // borderColor: colors.white,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
