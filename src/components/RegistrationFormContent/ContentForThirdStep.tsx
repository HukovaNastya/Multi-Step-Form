import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";
import {useForm} from "../../context/FormContext.tsx";

const ContentForThirdStep= () => {
    const {setUserInterest, setUserAge, setUserDescription} = useForm();
    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Age'
                htmlFor='age'
                onChange={setUserAge}
                id={3}
                inputType='number'
                placeholder='Age'
            />
            <RegistrationFormInput
                titleText='Area of interest'
                htmlFor='interest'
                onChange={setUserInterest}
                id={4}
                inputType='interest'
                placeholder='Area of interest'/>
            <RegistrationFormInput
                titleText='Bio / Description'
                htmlFor='description'
                onChange={setUserDescription}
                id={5}
                inputType='type'
                placeholder='Bio / Description'/>
        </div>
    )
}

export default ContentForThirdStep;