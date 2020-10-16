import React, { useContext } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";
import themeContext from "../config/themeContext";

export default function AirportCard({
  name,
  code,
  onPress,
  renderLeftActions,
  ...otherProps
}) {
  const theme = useContext(themeContext);
  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <TouchableHighlight
        underlayColor={theme.cardUnderlay}
        onPress={onPress}
        style={[
          styles.container,
          { backgroundColor: theme.card, shadowColor: theme.cardShadow },
        ]}
      >
        <View style={styles.text}>
          <AppText style={[styles.name, { color: theme.color }]}>
            {name}
          </AppText>
          <AppText style={[styles.code, { color: theme.color }]}>
            {code}
          </AppText>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
    //backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
    elevation: 10,
    shadowRadius: 3,
    shadowOffset: {
      height: 5,
      width: 1,
    },
    shadowOpacity: 0.5,
    // shadowColor: colors.medium,
    alignItems: "center",
  },
  text: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
  },
  code: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
