import { DefaultTheme, makeStyles } from "@mui/styles";
import React from "react";

type GlassBackgroundProps = {
  children: React.ReactNode;
};

const useGlassBackgroundStyles = makeStyles({
  root: {
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
});

const GlassBackground = ({ children }: GlassBackgroundProps) => {
  const classes = useGlassBackgroundStyles();
  return <div className={classes.root}>{children}</div>;
};

type Offset = {
  top?: number | undefined;
  right?: number | undefined;
  left?: number | undefined;
  bottom?: number | undefined;
  x?: number | undefined;
  y?: number | undefined;
};

type GlassProps = {
  width: number;
  height: number;
  offset: Offset;
  variable?: number
};

const useGlassStyles = makeStyles<DefaultTheme, GlassProps>({
  glass: {
    position: 'absolute',
    backdropFilter: 'blur(5px)',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0px 25px 45px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    borderRight:' 1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    animation: 'animate 10s linear infinite',
    animationDelay: props => `calc(-1s * ${props.variable})`,
    top: (props) => props.offset.top,
    right: (props) => props.offset.right,
    left: (props) => props.offset.left,
    bottom: (props) => props.offset.bottom,
    width: (props) => props.width,
    height: (props) => props.height,
    transform: (props) => `translate(${props.offset.x}, ${props.offset.y})`
  },
});

export const Glass = (props: GlassProps) => {
    const classes = useGlassStyles(props)
  return <div className={classes.glass}></div>;
};

export default GlassBackground;
