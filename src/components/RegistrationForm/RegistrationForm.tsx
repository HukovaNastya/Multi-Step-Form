import "./RegistrationForm.css"
import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";
import RegistrationFormContent from "../RegistrationFormContent";
import Stepper from "../Stepper/Stepper.tsx";
import Button from "../Button/Button.tsx";
import {useMemo, useState} from "react";
import Modal from "../Modal/Modal.tsx";
import Typography from "../Typography/Typography.tsx";

const RegistrationForm = () => {
    const [isModalOpen, setModalOpen] = useState(true);

    const onFormSubmit = (e: any) => {
        e.preventDefault();

        setModalOpen(true)
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
        <div>
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
                                    <button type='submit'
                                            className='form-button text-medium form-text active-button'>Submit
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Form>
            </div>
            <Modal isActive={isModalOpen} toggleModal={setModalOpen}>
                <div className='d-flex justify-space-between'>
                    <div className='d-flex '>
                        <div>
                            <Typography>Name:</Typography>
                            <Typography>{}</Typography>

                        </div>
                    </div>
                    <div>

                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default RegistrationForm;