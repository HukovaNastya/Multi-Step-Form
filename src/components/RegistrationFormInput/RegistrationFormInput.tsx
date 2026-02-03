import Label from "../Label/Label.tsx";
import Typography from "../Typography/Typography.tsx";
import "./RegistrationFormInput.css";
import TextField from "../TextField/TextField.tsx";
import React, {type ReactNode} from "react";

interface RegistrationFormInputProps {
    titleText?: string;
    className?:string;
    children?:ReactNode;
    htmlFor?:any;
    innerRef?:any;
    id?:any;
    inputType?:any;
    placeholder?:any;
    onChange?:any;
}

const RegistrationFormInput:React.FC<RegistrationFormInputProps> = ({titleText, htmlFor, innerRef, id, inputType, placeholder, onChange}) => {
    return (
        <div className='d-flex flex-column registration-form-input-wrapper'>
               <Label htmlFor={htmlFor} className='registration-form-label'>
                   <Typography variant="h3" className="label form-title text-small">
                       {titleText}
                   </Typography>
               </Label>
            <TextField
                innerRef={innerRef}
                id={id}
                className='registration-form-input  text-medium'
                type={inputType}
                name={htmlFor}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default RegistrationFormInput;