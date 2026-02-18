import "./RegistrationForm.css"
import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";
import RegistrationFormContent from "../RegistrationFormContent/RegistrationFormContent.tsx";
import Stepper from "../Stepper/Stepper.tsx";

import Modal from "../Modal/Modal.tsx";
import RegistrationModalContent from "../RegistrationModalContent/RegistrationModalContent.tsx";
import {useOnboardingFormData, useOnboardingFormApi} from "../../context/OnboardingFormContext.tsx";
import {type Content, Contents} from "../RegistrationModalContent/interface.ts";
import useUserMutation from "../../hooks/useUserMutation.ts";
import {Steps} from "../RegistrationFormContent/interface.tsx";


const RegistrationForm = () => {
    const { step, isModalOpen } = useOnboardingFormData()
    const { setModalOpen} = useOnboardingFormApi();
    const {loading, error}  = useUserMutation();

    // const onFormSubmit = (e: any) => {
    //     e.preventDefault();
    //     setModalOpen(true);
    // }

    const steps =  [
            {id: 1, label: 'Account Type'},
            {id: 2, label: 'Personal Information'},
            {id: 3, label: 'Profile Data'},
        ];

    const contentValue: Content =
        loading ? Contents.Loading :
            error ? Contents.Error :
                Contents.Info;

 const registrationFormContent =  step === 0 ?
     Steps.FirstStep : step === 1 ?
         Steps.SecondStep : Steps.ThirdStep;

    return (
        <div>
            <div className='registration-form-wrapper'>
                <Form className='registration-form d-flex flex-column'>
                    <FormHeader/>
                    <div className='form-stepper-wrapper'>
                        <Stepper
                            steps={steps}
                            current={step}
                        />
                    </div>
                    <RegistrationFormContent
                       formContent={registrationFormContent}
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