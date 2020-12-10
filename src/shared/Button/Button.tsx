import React from 'react'
import './Button.css'

declare interface ButtonProps {
    onClick?: () => void,
    appendIcon?: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className="AppButton" onClick={props.onClick}>
        {props.children || 'nameless button'}
        {props.appendIcon}
    </button>
}
export default Button