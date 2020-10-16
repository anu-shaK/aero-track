import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import colors from "../../config/colors";
import themeContext from "/Users/anuk/Desktop/Desk/Coding/AeroTrack/app/config/themeContext.js";

export default function MenuOptions({ title }) {
  const theme = useContext(themeContext);
  const { handleSubmit } = useFormikContext();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppButton
        style={{ color: colors.white }}
        title={title}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.background,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
    padding: 10,
  },
});
