import React, {type ReactNode} from "react";

interface TypographyProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
    children?:ReactNode;
    className?: string;
}

const Typography:React.FC<TypographyProps> = ({ variant, children, className }) => {
    const Component = variant || "h1"
    return (
        <Component className={className}>{children}</Component>
    )
}

export default Typography;