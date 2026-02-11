import "./RegistrationForm.css"
import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";
import RegistrationFormContent from "../RegistrationFormContent";
import Stepper from "../Stepper/Stepper.tsx";

import Modal from "../Modal/Modal.tsx";
import RegistrationModalContent from "../RegistrationModalContent/RegistrationModalContent.tsx";
import {useOnboardingFormData, useOnboardingFormApi} from "../../context/OnboardingFormContext.tsx";
import {type Content, Contents} from "../RegistrationModalContent/interface.ts";
import useUserMutation from "../../hooks/useUserMutation.ts";
// import Typography from "../Typography/Typography.tsx";
// import {createUser} from "../../services/onboardingForm.services.ts";
// import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
// import localStorageServise from "../../hooks/useStorage.tsx";
//
// const storageKeys = localStorageServise.Local_Storage_Keys;

const RegistrationForm = () => {
    // const [isModalOpen, setModalOpen] = useState(false);
    const { step, isModalOpen } = useOnboardingFormData()
    const {setStep, setModalOpen} = useOnboardingFormApi();
    const {loading, error}  = useUserMutation()

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        setModalOpen(true);
    }

    const steps =  [
            {id: 1, label: 'Account Type'},
            {id: 2, label: 'Personal Information'},
            {id: 3, label: 'Profile Data'},
        ];

    // const [step, setStep] = useState(0);


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

    const onSubmitClick = () => {
        setModalOpen(true);
    }

    const contentValue: Content =
        loading ? Contents.Loading :
            error ? Contents.Error :
                Contents.Info;


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
                    <RegistrationFormContent
                        step={step}
                        onTriggerNext={onNextClick}
                        onTriggerPrev={onPreviousClick}
                        onTriggerSubmit={onSubmitClick}
                    />
                </Form>
            </div>
            {isModalOpen ? (
                <Modal isActive={isModalOpen} toggleModal={setModalOpen}>
                    <RegistrationModalContent title='Registration Summary:' content={contentValue}/>
                </Modal>
            ): null}
        </div>
    )
}

export default RegistrationForm;