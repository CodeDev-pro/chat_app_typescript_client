import React from "react";
import { createStyles } from "./utils/Resources";
import { Theme } from "./theme/Theme";
import classnames from 'classnames'

type ButtonProps = {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
} & Omit<React.ComponentProps<"button">, "children">;

type LinkProps = {
  to?: string,
  type?: "btn" | "a",
  gutterLeft?: boolean,
  gutterRight?: boolean
} & React.ComponentProps<"a">

const useAnchorStyles = createStyles<Theme, LinkProps>((theme, props) => ({
  root: {
    ...theme.textOptions.body2,
    fontSize: "0.7rem",
    textDecoration: 'none',
    color: theme.palette.primary.main,
    margin: `0 ${props.gutterRight ? "5px" : "0px"} 0 ${props.gutterLeft ? "5px" : "0px"}`,
    cursor: "pointer"
  }
}))

const useStyles = createStyles<Theme, ButtonProps>((theme, props) => ({
  root: {
    ...theme.textOptions.body1,
    padding: "10px 30px",
    color: "white",
    fontWeight: "bolder",
    boxShadow:
      "2px 0.5px 5px 0.5px rgba(0,0,0,0.2), inset 2px 0.5px 5px 0.5px rgba(0,0,0,0.2)",
    background: `linear-gradient(to right, ${theme.palette.primary?.main}, ${theme.palette.primary?.lighter})`,
    outline: "none",
    border: 'none',
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.5s ease",
    "&:hover": {
      boxShadow:
      "2px 3px 7px 1px rgba(0,0,0,0.35), inset 2px 0.5px 5px 0.5px rgba(0,0,0,0.2)",
    }
  },
}));

const Button = (props: ButtonProps) => {
  const { handleClick, children, ...rest } = props;
  const classes = useStyles(props);
  return (
    <button className={classnames(classes.root, props.className)} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};


export const Link = (props: LinkProps) => {
  const classes = useAnchorStyles(props)
  return <a className={classnames(classes.root, props.className)}>
    {props.children}
  </a>
}

export default Button;
