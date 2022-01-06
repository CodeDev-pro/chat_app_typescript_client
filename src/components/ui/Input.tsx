import React from 'react'
import * as CSS from 'csstype'
import { createStyles } from "./utils/Resources";
import { Theme, theme } from "./theme/Theme";

type InputStyleProps = {
    focusColor?: CSS.Property.Color,
    className?: string
}

type InputOwnProps = {
    type?: React.HTMLInputTypeAttribute,
    label?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string 
}

type InputProps = InputOwnProps & InputStyleProps

const useStyles = createStyles<Theme, InputProps>((theme, props) => ({
    inputGroup: {
        width: "100%",
        height: 'fit-content'
    },
    label: {
        ...theme.textOptions.body2,
        display: 'block',
        marginBottom: "2px",
        color: '#989898',
    },
    input: {
        border: "0.5px solid #989898",
        padding: "5px",
        boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.1)",
        outline: "none",
        borderRadius: '4px',
        width: "100%",
        color: "#454545"
    },
    errorText: {
        ...theme.textOptions.body2,
        color: 'red'
    }
}))

const InputGroup = (props: InputProps) => {
    const classes = useStyles(props)
    const { value, onChange, label, type } = props
    return (
        <div className={classes.inputGroup}>
            <label className={classes.label}>{label}</label>
            <input className={classes.input} name={type} type={type} onChange={onChange} value={value} />
            {/* <span className={classes.errorText}>Error</span> */}
        </div>
    )
}

export default InputGroup
