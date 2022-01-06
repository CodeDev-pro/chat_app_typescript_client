import React from "react";
import { createStyles } from "./utils/Resources";
import Text from './Text'

type CheckboxProps = {
  label?: string;
};

const useStyles = createStyles((theme, props) => ({
  root: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& input[type='checkbox']": {
      appearance: "none",
      width: "40px",
      backgroundColor: "#e9e9e9",
      height: "20px",
      borderRadius: "15px",
      position: "relative",
      boxShadow: "inset 0 0 5px rgba(0,0,0,0.2)",
      transition: ".5s",
      marginRight: "5px",
      padding:"0 5px"
    },
    "& input[type='checkbox']::before": {
      position: "absolute",
      content: '""',
      top: "0",
      left: "0",
      backgroundColor: "white",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      boxShadow: "0 0 2px rgba(0,0,0,0.2)",
      transform: "scale(1.1)",
      transition: ".5s",
    },
    "& input:checked[type='checkbox']": {
      backgroundColor: theme.palette.primary.main,
    },
    "& input:checked[type='checkbox']::before": {
      left: "20px",
    },
  },
}));

const Checkbox = (props: CheckboxProps) => {
    const classes = useStyles({})
  return <div className={classes.root}>
      <input type="checkbox" className={classes.checkbox} />
                <Text variant="p" type="body2" fontSize="0.7rem">Remember me</Text>
  </div>;
};

export default Checkbox;
