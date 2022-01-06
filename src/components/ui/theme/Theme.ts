import * as CSS from "csstype";

export type PaletteColor = {
  light: CSS.Property.Color;
  main: CSS.Property.Color;
  lighter: CSS.Property.Color;
  lightest: CSS.Property.Color;
  dark: CSS.Property.Color;
  darker: CSS.Property.Color;
  darkest: CSS.Property.Color;
};

export type TextVariantOwnProps = {
  fontSize?: CSS.Property.FontSize;
  fontWeight?: CSS.Property.FontWeight;
  fontFamily?: CSS.Property.FontFamily;
  color?: CSS.Property.Color;
  italic?: boolean;
};

export type TextVariantProps = TextVariantOwnProps &
  Omit<React.CSSProperties, keyof TextVariantOwnProps>;

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
}

export type PaletteOptions = {
  primary: PaletteColor;
  secondary?: PaletteColor;
  error?: PaletteColor;
  warning?: PaletteColor;
  info?: PaletteColor;
  success?: PaletteColor;
};

export type TextOptions = {
  h1: TextVariantProps;
  h2: TextVariantProps;
  h3: TextVariantProps;
  h4: TextVariantProps;
  h5: TextVariantProps;
  h6: TextVariantProps;
  body1: TextVariantProps;
  body2: TextVariantProps;
  caption: TextVariantProps;
};

export type Theme = {
  palette: PaletteOptions;
  textOptions: TextOptions;
};

export const theme: Theme = {
  palette: {
    primary: {
      lightest: "#D396FF",
      lighter: "#BF68FF",
      light: "#AC3BFF",
      dark: "#8000DE",
      main: "#980DFF",
      darker: "#6500B0",
      darkest: "#4B0082",
    },
  },
  textOptions: {
    h1: {
      color: "#FFFFFF",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: 1,
    },
    h2: {
      color: "#111",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.8rem",
      fontWeight: "bold",
      lineHeight: 1,
    },
    h3: {
      color: "#111",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.6rem",
      fontWeight: "bold",
      lineHeight: 1,
    },
    h4: {
      color: "#111",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.4rem",
      fontWeight: "bold",
      lineHeight: 1,
    },
    h5: {
      color: "#111",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.2rem",
      fontWeight: "bold",
      lineHeight: 1,
    },
    h6: {
      color: "#111",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: 1,
    },
    body1: {
      color: "#111",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.8rem",
      fontWeight: "600",
      lineHeight: 1,
    },
    body2: {
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.7rem",
      fontWeight: "600",
      lineHeight: 1,
    },
    caption: {
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.6rem",
      fontWeight: "500",
      fontStyle: "italic",
      lineHeight: 1,
    },
  },
};
