import React, {type ReactNode} from "react";

interface FormProps {
    onSubmit?: (event: React.SyntheticEvent<HTMLFormElement>) => void;
    className?:string;
    children?:ReactNode;
}


const Form:React.FC<FormProps> = ({children, onSubmit, className}) => {
    return (
        <div>
            <form onSubmit={onSubmit} className={className}>
                {children}
            </form>
        </div>
    )
}

export default Form;