import React, {type ReactNode} from "react";

interface LabelProps {
    htmlFor?:any;
    className?:string;
    children?:ReactNode
}


const Label:React.FC<LabelProps> =({ htmlFor,className, ...props }) => {
    return(
        <label htmlFor={htmlFor} {...props}/>
    )
}

export default Label;