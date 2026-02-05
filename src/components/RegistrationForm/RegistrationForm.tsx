import "./RegistrationForm.css"
import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";
import RegistrationFormContent from "../RegistrationFormContent";
// import { useForm } from "../../context/OnboardingFormContext.tsx";
import Stepper from "../Stepper/Stepper.tsx";
import Button from "../Button/Button.tsx";
import { useMemo, useState } from "react";

const RegistrationForm = () => {

    const onFormSubmit=(e:any) => {
        e.preventDefault();

        console.log('Hello World')
    }
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
        <div className='registration-form-wrapper'>
            <Form className='registration-form d-flex flex-column' onSubmit={onFormSubmit}>
                <FormHeader/>
                <div className='form-stepper-wrapper'>
                    <Stepper
                        steps={steps}
                        current={step}
                    />
                </div>
                <RegistrationFormContent step={step}/>
                {
                    step < 2 ? (
                        <div className='form-buttons d-flex justify-end'>
                            <div>
                                <Button
                                    className='form-button text-medium form-text'
                                    onClick={onPreviousClick}
                                    disabled={step === 0}
                                    type='button'
                                    id={1}
                                >
                                    Previous
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className='form-button text-medium form-text active-button'
                                    onClick={onNextClick}
                                    type='button'
                                    disabled={false}
                                    id={2}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className='form-buttons d-flex justify-end'>
                            <div>
                                <Button
                                    className='form-button text-medium form-text'
                                    onClick={onPreviousClick}
                                    disabled={step === 0}
                                    type='button'
                                    id={3}

                                >
                                    Previous
                                </Button>
                            </div>
                            <div>
                                <button type='submit' className='form-button text-medium form-text active-button'>Submit</button>
                            </div>
                        </div>
                    )
                }
            </Form>
        </div>
    )
}

export default RegistrationForm;