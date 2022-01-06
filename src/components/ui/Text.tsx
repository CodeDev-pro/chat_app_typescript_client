import React from "react";
import * as CSS from "csstype";
import { theme, Theme } from "../ui/theme/Theme";
import { createStyles } from "./utils/Resources";
import classnames from "classnames";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption";

type TextOwnProps<E extends React.ElementType> = {
  variant?: E;
};

type StyledTextProps = {
  fontSize?: CSS.Property.FontSize;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  children?: React.ReactNode;
  gutterBottom?: boolean;
  noWrap?: boolean;
  maxLines?: number;
  overflow?: CSS.Property.TextOverflow;
  color?: CSS.Property.Color;
  type?: TextVariant;
  className?: string;
  width?: CSS.Property.Width
};

type TextWholeProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<StyledTextProps, "variant">;

type TextProps<E extends React.ElementType> = TextWholeProps<E> &
  Omit<React.ComponentProps<E>, keyof TextWholeProps<E>>;

const useStyles = createStyles<Theme, StyledTextProps>(
  (theme, props: StyledTextProps) => ({
    root: {
      color: props.color,
      width: props.width,
      "& h1": {
        ...theme.textOptions.h1,
        ...props,
      },
      "& h2": {
        ...theme.textOptions.h2,
      },
      "& h3": {
        ...theme.textOptions.h3,
      },
      "& h4": {
        ...theme.textOptions.h4,
      },
      "& h5": {
        ...theme.textOptions.h5,
        ...props
      },
      "& h6": {
        ...theme.textOptions.h6,
      },
    },
    body1: {
      ...theme.textOptions.body1,
      ...props
    },
    body2: {
      ...theme.textOptions.body1,
      ...props
    },
    caption: {
      ...theme.textOptions.caption,
      ...props
    },
  })
);

const Text = <E extends React.ElementType>(props: TextProps<E>) => {
  const Component = props.variant || "p";
  const styledProps: StyledTextProps = {
    ...props,
  };
  const classes = useStyles(styledProps);

  return (
    <div className={classnames(classes.root, props.className)}>
      <Component
        className={
          classnames(props.type == "body1"
          ? classes.body1
          : props.type == "body2"
          ? classes.body2
          : props.type == "caption"
          ? classes.caption
          : classes.root, props.className)
        }
      >
        {props.children}
      </Component>
    </div>
  );
};

export default Text;
