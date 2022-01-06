import React from 'react'
import { createStyles } from "./utils/Resources";
import { Theme, theme } from "./theme/Theme";

type FormOwnProps = {
    //children: React.ReactNode
}

type FormProps = FormOwnProps & Omit<React.ComponentProps<"form">, keyof FormOwnProps>

const useStyles = createStyles<Theme, FormProps>((theme, props) => ({
    root: {
        width: "100%",
        height: "fit-content",
        padding: '2em'
    }
}))

const Form = (props: FormProps) => {
    const classes = useStyles(props)
    const { children, onSubmit, ...rest } = props;
    return (
        <form className={classes.root} onSubmit={onSubmit} {...rest}>
            {children}
        </form>
    )
}

export default Form
