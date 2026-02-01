import Stepper from "../Stepper/Stepper.tsx";
import ContentForFirstStep from "./ContentForFirstStep.tsx";
import {useMemo, useState} from "react";
import './RegistrationFormContent.css';
import Button from "../Button/Button.tsx";

const RegistrationFormContent = () => {
    const steps = useMemo(() => {
        return [
            {id: 1, label: 'Account Type'},
            {id: 2, label: 'Personal Information'},
            {id: 3, label: 'Profile Data'},
        ];

    }, [])

    const [step, setStep] = useState(0);

    const onNextClick = () => {
        if (step < Object.entries(steps).length) {
            setStep(step + 1);
        }
    }

    const onPreviousClick = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    }

    return (
        <div className='form-inner-wrapper'>
            <div className='form-stepper-wrapper'>
                <Stepper
                    steps={steps}
                    current={step}
                />
            </div>
            <ContentForFirstStep/>
            <div className='form-buttons d-flex justify-end'>
                <div>
                    <Button
                        className='form-button text-medium form-text'
                        onClick={onPreviousClick}
                        disabled={step === 0}
                    >
                        Previous
                    </Button>
                </div>
                <div>
                    <Button
                        className='form-button text-medium form-text active-button'
                        onClick={onNextClick}
                        disabled={step === Object.entries(steps).length - 1}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationFormContent;