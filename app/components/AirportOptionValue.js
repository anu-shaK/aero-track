import React, { useState } from "react";
import { StyleSheet, TextInput, View, Switch } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

export default function AirportOptionValue({ title, value }) {
  const [state, setState] = useState(false);
  const [isEnabled, setisEnabled] = useState(false);
  const toggleSwitch = () => {
    setisEnabled((previousState) => !previousState);
    setState(isEnabled ? false : true);
  };
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
        <Switch
          style={styles.toggle}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {state ? <TextInput style={styles.value}></TextInput> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
  },
  title: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  value: {
    width: "60%",
    fontSize: 15,
    color: colors.medium,
    fontWeight: "bold",
    backgroundColor: colors.white,
    margin: 10,
    marginTop: 5,
    padding: 5,
    shadowColor: colors.medium,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
  },
  toggle: {
    position: "absolute",
    right: 30,
  },
});
