import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import themeContext from "../config/themeContext";

export default function Separator({ style }) {
  const theme = useContext(themeContext);
  return (
    <View style={[style, styles.container]}>
      <View style={styles.line} />
      <Image
        style={styles.image}
        source={
          theme.theme === "dark"
            ? require("../assets/airplane-white.png")
            : require("../assets/airplane.png")
        }
      />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    paddingBottom: 15,
  },
  image: {
    width: 20,
    height: 20,
    opacity: 0.8,
  },
  line: {
    width: "40%",
    height: 1,
    backgroundColor: "#6e6969",
    margin: 10,
  },
});
