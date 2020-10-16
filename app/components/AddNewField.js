import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import AppFormField from "./forms/AppFormField";
import colors from "../config/colors";
import ListSeparator from "../components/ListSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import themeContext from "../config/themeContext";

export default function AddNewField({ key, newValue }) {
  const theme = useContext(themeContext);

  return (
    <View key={key}>
      <View style={styles.newFieldContainer}>
        <View style={styles.textInput}>
          <AppFormField
            name="value"
            autoCapitalize="words"
            placeholder="Enter Field"
            style={[
              styles.value,
              { backgroundColor: theme.card, color: theme.color },
            ]}
          />
          <AppFormField
            name="value"
            autoCapitalize="words"
            placeholder="Enter Value"
            style={[
              styles.value,
              { backgroundColor: theme.card, color: theme.color },
            ]}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.closeButton,
            {
              backgroundColor: theme.card,
              borderColor: theme.cardShadow,
            },
          ]}
          onPress={() => handleDeleteNewField()}
        >
          <MaterialCommunityIcons name="close" size={15} color={colors.add} />
        </TouchableOpacity>
      </View>
      <ListSeparator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginTop: Platform.OS === "android" ? 0 : 20 },

  value: {
    width: "70%",
    fontSize: 15,
    // color: colors.medium,
    fontWeight: "bold",
    // backgroundColor: colors.white,
    // marginLeft: 15,
    alignSelf: "center",
    margin: 5,
    padding: Platform.OS === "android" ? 5 : 10,
    shadowColor: colors.medium,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
  },

  newField: {
    width: "100%",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 30,
  },

  newFieldContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    alignSelf: "center",
    elevation: 5,
    borderWidth: 1,
    shadowColor: colors.medium,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
});
