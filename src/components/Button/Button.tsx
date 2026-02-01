import React, {type ReactNode} from "react";

interface ButtonProps {
    variant?: 'span' | 'div';
    className?: string;
    children?: ReactNode;
    onClick?:() => void;
    disabled?:boolean;
}


const Button:React.FC<ButtonProps> = ({ variant, children, className, onClick, disabled}) => {
    const Component = variant || "button"
    return (
        <Component className={className} onClick={onClick} disabled={disabled}>
            {children}
        </Component>
    )
}

export default Button;