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
        localStorage.setItem(storageKeys.Email, firstForm.current.email)
    }

    const onPasswordChange = (e:any) => {
        firstForm.current.password = e.target.value;
        if (firstForm.current.password != null) {
            localStorage.setItem(storageKeys.Password, firstForm.current.password)
        }
    }

    const nameValue = localStorage.getItem(storageKeys.Name)
    const emailValue = localStorage.getItem(storageKeys.Email)
    const passwordValue = localStorage.getItem(storageKeys.Password)

    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Name'
                htmlFor='name'
                // innerRef={firstForm.name}
                onChange={onNameChange}
                id={1}
                inputType='text'
                placeholder='Name'
                value={firstForm.current.name || nameValue}
            />
            <RegistrationFormInput
                titleText='Email'
                htmlFor='email'
                // innerRef={firstForm.current.email}
                onChange={onEmailChange}
                id={2}
                inputType='email'
                value={firstForm.current.email || emailValue}
                placeholder='Email'
            />
            <RegistrationFormInput
                titleText='Password'
                htmlFor='password'
                // innerRef={firstForm.current.password}
                value={firstForm.current.password || passwordValue}
                onChange={onPasswordChange}
                id={3}
                inputType='password'
                placeholder='Password'/>
        </div>
    )
}

export default ContentForSecondStep;