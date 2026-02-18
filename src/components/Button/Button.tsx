import React, {type ReactNode} from "react";

interface ButtonProps {
    variant?: 'span' | 'div';
    className?: string;
    children?: ReactNode;
    onClick?:(() => void) | ((value:any) => void);
    disabled?:boolean;
    id?: any;
    type?:any;
}

const Button:React.FC<ButtonProps> = ({ variant, children, className, onClick, disabled, type, id}) => {
    const Component = variant || "button"
    return (
        <Component className={className} onClick={onClick} disabled={disabled} type={type} id={id}>
            {children}
        </Component>
    )
}

export default Button;