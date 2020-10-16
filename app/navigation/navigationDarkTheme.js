import { DarkTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.add,
    card: colors.black,
  },
};
