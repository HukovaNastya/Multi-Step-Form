import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";


const ContentForSecondStep = () => {
    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Name'
                htmlFor='name'
                innerRef={null}
                id={1}
                inputType='text'
                placeholder='Name'
            />
            <RegistrationFormInput
                titleText='Email'
                htmlFor='email'
                innerRef={null}
                id={2}
                inputType='email'
                placeholder='Email'/>
            <RegistrationFormInput
                titleText='Password'
                htmlFor='password'
                innerRef={null}
                id={3}
                inputType='password'
                placeholder='Password'/>
        </div>
    )
}

export default ContentForSecondStep;