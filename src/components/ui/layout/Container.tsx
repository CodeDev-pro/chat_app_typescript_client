import {
  DefaultTheme,
  makeStyles,
  createStyles
} from "@mui/styles";
import { Theme } from '@mui/material'
import React from "react";
import * as CSS from 'csstype';

type FlexContainerProps = {

}

type ContainerProps = {
  flex?: CSS.Property.Flex;
  children?: React.ReactNode;
  flexDirection?: CSS.Property.FlexDirection;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  flexBox?: boolean;
  gutter?: boolean;
  borderRadius?: CSS.Property.BorderRadius,
  padTop?: boolean
};

const useStyles = makeStyles<Theme, ContainerProps>(theme => ({
  root: {
    padding: ({ gutter, padTop }) => `${padTop ? "2rem": "0rem"} ${gutter ? "2rem" : "0rem"}`,
    width: "100%",
    display: ({ flexBox }) => flexBox ? "flex" : "block",
    justifyContent: ({ justifyContent }) => justifyContent,
    alignItems: ({ alignItems }) => alignItems,
    flexDirection: ({ flexDirection }) => flexDirection,
    height: '100%',
    borderRadius: ({borderRadius}) => borderRadius,
    overflow: ({flexBox}) => flexBox ? "hidden" : "inherit"
  },
}));

const Container = ({ gutter = false, children, ...rest }: ContainerProps) => {
  const props: ContainerProps = { gutter, children, ...rest };
  const classes = useStyles(props);
  return <div className={classes.root}>{children}</div>;
};

export default Container;
