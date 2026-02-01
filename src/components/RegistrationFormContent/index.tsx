import Stepper from "../Stepper/Stepper.tsx";
import ContentForFirstStep from "./ContentForFirstStep.tsx";
import {useMemo, useState} from "react";
import './RegistrationFormContent.css';

const RegistrationFormContent = () => {
    const steps = useMemo(() => {
        return [
            {label: 'Account Type'},
            {label: 'Personal Information'},
            {label: 'Profile Data'},
        ];

    }, [])

    const [step, setStep] = useState(0);

    return (
        <div className='form-inner-wrapper'>
            <div className='form-stepper-wrapper'>
                <Stepper
                    steps={steps}
                    current={step}
                    onStepClick={setStep}
                />
            </div>
            <ContentForFirstStep/>
            <div className='form-buttons'>

            </div>
        </div>
    )
}

export default RegistrationFormContent;