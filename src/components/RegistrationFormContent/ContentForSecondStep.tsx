import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";
import {useForm} from "../../context/FormContext.tsx";


const ContentForSecondStep = () => {
    const {setUserName, setUserEmail, setUserPassword} = useForm();

    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Name'
                htmlFor='name'
                onChange={setUserName}
                id={1}
                inputType='text'
                placeholder='Name'
            />
            <RegistrationFormInput
                titleText='Email'
                htmlFor='email'
                onChange={setUserEmail}
                id={2}
                inputType='email'
                placeholder='Email'/>
            <RegistrationFormInput
                titleText='Password'
                htmlFor='password'
                onChange={setUserPassword}
                id={3}
                inputType='password'
                placeholder='Password'/>
        </div>
    )
}

export default ContentForSecondStep;