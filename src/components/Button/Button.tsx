import React, {type ReactNode} from "react";

interface ButtonProps {
    variant?: 'span' | 'div';
    className?: string;
    children?: ReactNode;
    onClick?:() => void;
}


const Button:React.FC<ButtonProps> = ({ variant, children, className, onClick}) => {
    const Component = variant || "button"
    return (
        <Component className={className} onClick={onClick}>
            {children}
        </Component>
    )
}

export default Button;