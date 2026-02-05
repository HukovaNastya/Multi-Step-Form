import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";
import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
import {useEffect} from "react";
import localStorageServise from "../../hooks/useStorage.tsx";

const storageKeys = localStorageServise.Local_Storage_Keys;


const ContentForSecondStep = () => {
    // @ts-ignore
    const {firstForm} = useOnboardingFormData();

    useEffect(()=> {
        console.log('first', firstForm)
    }, [firstForm.current.name])

    const onNameChange = (e:any) => {
            firstForm.current.name = e.target.value;
            localStorage.setItem(storageKeys.Name, firstForm.current.name)
    }

    const onEmailChange = (e:any) => {
        firstForm.current.email = e.target.value;
    }

    const onPasswordChange = (e:any) => {
        firstForm.current.password = e.target.value;
    }

    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Name'
                htmlFor='name'
                innerRef={firstForm.name}
                onChange={onNameChange}
                id={1}
                inputType='text'
                placeholder='Name'
            />
            <RegistrationFormInput
                titleText='Email'
                htmlFor='email'
                innerRef={firstForm.email}
                onChange={onEmailChange}
                id={2}
                inputType='email'
                placeholder='Email'/>
            <RegistrationFormInput
                titleText='Password'
                htmlFor='password'
                innerRef={firstForm.password}
                onChange={onPasswordChange}
                id={3}
                inputType='password'
                placeholder='Password'/>
        </div>
    )
}

export default ContentForSecondStep;