import React, { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";

import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";

import themeContext from "./app/config/themeContext";
import theme from "./app/config/theme";
import navigationDarkTheme from "./app/navigation/navigationDarkTheme";

export default function App() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });
  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer
        theme={mode === true ? navigationDarkTheme : navigationTheme}
      >
        <AppNavigator />
      </NavigationContainer>
    </themeContext.Provider>
  );
}
