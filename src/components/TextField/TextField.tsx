import React from "react";

interface TextFieldProps {
    innerRef?: any;
    className?: string;
    id?: any;
    type?: any;
    name?: any;
    placeholder?: any;
    onChange: any;
    value?:any;
}

const TextField:React.FC<TextFieldProps> = ({ innerRef, className, id, type, name, placeholder, onChange, value}) => {
    return (
        <input
            ref={innerRef}
            className={className}
            id={id}
            name={name}
            type={type}
            placeholder={ placeholder}
            onChange={(e) => onChange(e)}
            defaultValue={value}
        />
    )
}

export default TextField;