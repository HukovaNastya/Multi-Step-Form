import React, {type ReactNode} from "react";

interface ButtonProps {
    variant?: 'span' | 'div';
    className?: string;
    children?: ReactNode;
}


const Button:React.FC<ButtonProps> = ({ variant, children, className}) => {
    const Component = variant || "button"
    return (
        <Component className={className}>
            {children}
        </Component>
    )
}

export default Button;