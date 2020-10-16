import React from "react";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";

import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, styles.container]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 15,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
