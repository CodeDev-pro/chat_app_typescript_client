import React from 'react'
import * as CSS from 'csstype'
import { DefaultTheme, makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import classnames from 'classnames'

type BoxShadowProps = 'light' | "dark" | "medium"

const getShadow = (type: BoxShadowProps | CSS.Property.BoxShadow): CSS.Property.BoxShadow => {
    let shadow: CSS.Property.BoxShadow;
    if(type == 'light') {
        shadow = "0px 3px 3px 3px rgba(0,0,0,0.4)"
    } else if(type == 'dark') {
        shadow = "0px 3px 3px 3px rgba(0,0,0,0.4)"
    } else if(type == 'medium'){
        shadow = "0px 3px 3px 3px rgba(0,0,0,0.4)"
    } else {
        shadow = type;
    }
    return shadow;
}

type FlexItemProps = {
    flex?: number,
    justifySelf?: CSS.Property.JustifySelf,
    alignSelf?: CSS.Property.AlignSelf,
    container?: boolean,
    children?: React.ReactNode
}

type BoxProps = {
    width?: CSS.Property.Width | undefined,
    height?: CSS.Property.Height | undefined,
    clickable?: boolean,
    boxShadow?: BoxShadowProps | CSS.Property.BoxShadow,
    borderRadius?: CSS.Property.BorderRadius,
    boxType?: 'glass' | "normal",
    children?: React.ReactNode,
    backgroundColor?: CSS.Property.Background,
    flexItem?: boolean,
    centerContent?: boolean,
    flexDirection?: CSS.Property.FlexDirection,
    className?: string
} & FlexItemProps

const useStyles = makeStyles<Theme, BoxProps>((theme: Theme) => createStyles({
    root: {
        overflow: 'hidden',
        boxShadow: ({boxShadow = "none"}) => getShadow(boxShadow),
        borderRadius: ({borderRadius}) => borderRadius,
        width: ({width = "100%"}) => width,
        height: ({height = "100%"}) => height,
        background: ({backgroundColor, boxType}) => boxType ? "rgba(255, 255, 255, 0.1)" : backgroundColor,
        flex: ({flex}) => flex,
        backdropFilter: ({boxType}) => boxType === "glass" ? `blur(5px)` : "",
        border: ({boxType}) => boxType === "glass" ? `1px solid rgba(255, 255, 255, 0.3)` : "none",
        borderBottom: ({boxType}) => boxType === "glass" ? `1px solid rgba(255, 255, 255, 0.2)` : "none",
        borderRight: ({boxType}) => boxType === "glass" ? `1px solid rgba(255, 255, 255, 0.2)` : "none",
        display: ({flexItem}) => flexItem ? "flex" : "block",
        justifyContent: ({centerContent}) => centerContent ? "center" : "",
        alignItems: ({centerContent}) => centerContent ? "center" : "",
        flexDirection: ({flexDirection}) => flexDirection
    },
}))

const Box = (props: BoxProps) => {
    const classes = useStyles(props)

    return (
        <div className={classnames(classes.root, props.className)}>
            {props.children}
        </div>
    )
}

export default Box
