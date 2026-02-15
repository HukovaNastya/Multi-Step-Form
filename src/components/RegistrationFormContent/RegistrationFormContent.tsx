import {StepsMapping} from "./index.tsx";
import type {Step} from "./interface.tsx";
import type {JSX} from "react";

type RegistrationFormContentProps = {
    formContent: Step;
}

const RegistrationFormContent = ({ formContent }: RegistrationFormContentProps ) => {
    const Component: () => JSX.Element= StepsMapping[formContent];

    return (
        <div className='form-inner-wrapper'>
            <Component/>
        </div>
    )
}

export default RegistrationFormContent;