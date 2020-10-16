import React from "react";
import { StyleSheet, TextInput, View, Platform } from "react-native";

import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppTextInput({
  icon,
  placeholder,
  onPress,
  style,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.text} placeholder={placeholder}></TextInput>
      <View style={styles.iconView}>
        {icon && (
          <MaterialIcons
            style={styles.icon}
            name={icon}
            size={25}
            color={colors.medium}
            onPress={onPress}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "90%",
    borderRadius: 25,
    flexDirection: "row",
    padding: 5,
    marginVertical: 0,
    shadowColor: colors.medium,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 5,
      width: 1,
    },
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.medium,
    fontSize: 15,
    padding: 10,
  },
  iconView: {
    width: 30,
    height: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    paddingRight: 10,
  },
});
