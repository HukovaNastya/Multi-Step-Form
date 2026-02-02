import React from "react";

interface TextFieldProps {
    innerRef?:any;
    className?:string;
    id?:any;
    type?:any;
    name?:any;
    placeholder?:any;
}

const TextField:React.FC<TextFieldProps> = ({ innerRef, className, id, type, name, placeholder, }) => {
    return (
        <input
            ref={innerRef}
            className={className}
            id={id}
            name={name}
            type={type}
            placeholder={ placeholder}
        />
    )
}

export default TextField;