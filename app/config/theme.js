import colors from "./colors";

const theme = {
  light: {
    theme: "light",
    background: colors.background,
    color: colors.black,
    card: colors.white,
    cardShadow: colors.medium,
    cardUnderlay: colors.light,
    lightColor: colors.medium,
    addButton: colors.white,
    addCircle: colors.light,
    separator: colors.light,
  },
  dark: {
    theme: "dark",
    background: colors.darkBackground,
    color: colors.light,
    card: colors.black,
    cardShadow: colors.shadowDark,
    cardUnderlay: colors.medium,
    lightColor: colors.medium,
    addButton: colors.black,
    addCircle: colors.medium,
    separator: colors.medium,
  },
};

export default theme;
