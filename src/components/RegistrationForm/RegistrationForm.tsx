import "./RegistrationForm.css"
import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";
import RegistrationFormContent from "../RegistrationFormContent";
import Stepper from "../Stepper/Stepper.tsx";
// import Button from "../Button/Button.tsx";
import {useState} from "react";
import Modal from "../Modal/Modal.tsx";
import RegistrationModalContent from "../RegistrationModalContent/RegistrationModalContent.tsx";
// import Typography from "../Typography/Typography.tsx";
// import {createUser} from "../../services/onboardingForm.services.ts";
// import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
// import localStorageServise from "../../hooks/useStorage.tsx";
//
// const storageKeys = localStorageServise.Local_Storage_Keys;

const RegistrationForm = () => {
    // const {accountType, firstForm, secondForm} = useOnboardingFormData();
    const [isModalOpen, setModalOpen] = useState(false);
    // const [userCreated, setUserCReated] = useState(false);
    // const [isLooading, setIsLoading] = useState(false);

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        setModalOpen(true);
    }

    // const onResetClick = () => {
    //     // setModalOpen(false);
    //     // firstForm.current.name = "";
    //     // secondForm.current.age = "";
    //     // firstForm.current.email ="";
    //     // accountType.current.accountType = "";
    //     // firstForm.current.password = "";
    //     // secondForm.current.interest= "";
    //     // secondForm.current.description="";
    //     // localStorage.setItem(storageKeys.Name, firstForm.current.name)
    //     // localStorage.setItem(storageKeys.Age, secondForm.current.age)
    //     // localStorage.setItem(storageKeys.Email, firstForm.current.email)
    //     // localStorage.setItem(storageKeys.AccountType, accountType.current.accountType)
    //     // localStorage.setItem(storageKeys.Password, firstForm.current.password)
    //     // localStorage.setItem(storageKeys.Interest, secondForm.current.interest)
    //     // localStorage.setItem(storageKeys.Description, secondForm.current.description)
    //     // setIsLoading(true)
    //     // setModalOpen(false);
    //     // setIsLoading(false)
    //
    // }

    const steps =  [
            {id: 1, label: 'Account Type'},
            {id: 2, label: 'Personal Information'},
            {id: 3, label: 'Profile Data'},
        ];

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

    const onSubmitClick = () => {
        setModalOpen(true);
    }

    // const onSentClick= async() => {
    //     try {
    //         // const name = firstForm.current.name;
    //         // const age = parseFloat(secondForm.current.age);
    //         // const email = firstForm.current.email;
    //         // const account= accountType.current.accountType;
    //         // const password = firstForm.current.password;
    //         // const interests = secondForm.current.interest;
    //         // const description = secondForm.current.description;
    //         //
    //         // await createUser( { name, age, email, accountType: account, password, interests, description })
    //         setUserCReated(true);
    //         setModalOpen(false);
    //     } catch (e) {
    //         console.error(e)
    //         setUserCReated(false);
    //         setModalOpen(false);
    //     }
    //
    // }
    //
    //  {isLooading ?  <div>Loading...</div> : null}


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
                    <RegistrationModalContent title='Registration Summary:'/>
                </Modal>
            ): null}
        </div>
    )
}

export default RegistrationForm;