import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";
import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
// import {useEffect} from "react";
// import localStorageServise from "../../hooks/useStorage.tsx";

// const storageKeys = localStorageServise.Local_Storage_Keys;

const ContentForThirdStep= () => {
    const {secondForm} = useOnboardingFormData();

    // useEffect(()=> {
    //     console.log('second', secondForm)
    // }, [secondForm])

    const onAgeChange = (e:any) => {
        // secondForm.current.age = e.target.value;
        // localStorage.setItem(storageKeys.Age, secondForm.current.age)
    }

    const onInterestChange = (e:any) => {
        // secondForm.current.interest = e.target.value;
        // localStorage.setItem(storageKeys.Interest, secondForm.current.interest)
    }
    const onDescriptionChange = (e:any) => {
        // secondForm.current.interest= e.target.value;
        // localStorage.setItem(storageKeys.Interest, secondForm.current.interest)
    }
    //
    // const ageValue = localStorage.getItem(storageKeys.Age)
    // const interestValue = localStorage.getItem(storageKeys.Interest)
    // const descriptionValue = localStorage.getItem(storageKeys.Description)
    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Age'
                htmlFor='age'
                onChange={onAgeChange}
                value={secondForm.age}
                id={3}
                inputType='number'
                placeholder='Age'
            />
            <RegistrationFormInput
                titleText='Area of interest'
                htmlFor='interest'
                onChange={onInterestChange}
                value={secondForm.interest}
                id={4}
                inputType='interest'
                placeholder='Area of interest'/>
            <RegistrationFormInput
                titleText='Bio / Description'
                htmlFor='description'
                onChange={onDescriptionChange}
                value={secondForm.description}
                id={5}
                inputType='type'
                placeholder='Bio / Description'/>
        </div>
    )
}

export default ContentForThirdStep;