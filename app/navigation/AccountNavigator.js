import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen.js";
import AccountScreen from "../screens/AccountScreen";
import colors from "../config/colors.js";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="About"
      component={AccountScreen}
      options={{
        headerTitleAlign: "center",
        headerTintColor: colors.white,
        headerStyle: { backgroundColor: colors.header },
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
