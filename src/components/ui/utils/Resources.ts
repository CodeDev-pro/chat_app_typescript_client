import { theme, Theme } from "../theme/Theme";
import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContextProvider";
import { makeStyles } from '@mui/styles';
import { ClassNameMap, Styles, WithStylesOptions } from '@mui/styles/withStyles';

export const createStyles = <E extends Theme, P extends object = {}>(
  //properties?: {},
    callback: (theme: Theme, props: P) => Styles<Theme, {}, string>
) => {
    return (props: P) => makeStyles<Theme>(callback(theme, props))(props);
};