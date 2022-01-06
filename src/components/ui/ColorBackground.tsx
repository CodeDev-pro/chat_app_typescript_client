import React from "react";
import { makeStyles, DefaultTheme } from "@mui/styles";
import * as CSS from 'csstype'

type ColorBackgroundProps = {
  children: React.ReactNode;
};

type Offset = {
  top?: number | undefined;
  right?: number | undefined;
  left?: number | undefined;
  bottom?: number | undefined;
};

type ColorProps = {
  width: number;
  height: number;
  color: CSS.Property.Color;
  offset: Offset;
};

const useStyles = makeStyles<DefaultTheme, ColorProps>({
  color: {
    position: "absolute",
    backgroundColor: (props) => props.color,
    width: (props) => props.width,
    height: (props) => props.height,
    top: (props) => props.offset.top,
    bottom: (props) => props.offset.bottom,
    right: (props) => props.offset.right,
    left: (props) => props.offset.left,
  },
});

const useStyles2 = makeStyles<DefaultTheme, ColorBackgroundProps>({
  root: {
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    position: "absolute",
    filter: "blur(150px)",
    overflow: 'hidden'
  },
});

export const Color = (props: ColorProps) => {
  const classes = useStyles(props);
  return <div className={classes.color}></div>;
};

const ColorBackground = ({ children }: ColorBackgroundProps) => {
  const classes = useStyles2({ children });
  return <div className={classes.root}>{children}</div>;
};

export default ColorBackground;
