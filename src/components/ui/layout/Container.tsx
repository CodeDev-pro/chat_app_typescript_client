import {
  DefaultTheme,
  makeStyles,
  createStyles
} from "@mui/styles";
import { Theme } from '@mui/material'
import React from "react";
import * as CSS from 'csstype';
import classnames from 'classnames'

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
  padTop?: boolean,
  className?: string,
  gutterTop?: boolean
};

const useStyles = makeStyles<Theme, ContainerProps>(theme => ({
  root: {
    padding: ({ gutter, gutterTop }) => `${gutterTop ? "2rem": "0rem"} ${gutter ? "2rem" : "0rem"}`,
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
  return <div className={classnames(classes.root, props.className)}>{children}</div>;
};

export default Container;
