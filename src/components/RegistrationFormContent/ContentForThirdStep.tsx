import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";

const ContentForThirdStep= () => {
    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Age'
                htmlFor='age'
                innerRef={null}
                id={3}
                inputType='number'
                placeholder='Age'
            />
            <RegistrationFormInput
                titleText='Area of interest'
                htmlFor='interest'
                innerRef={null}
                id={4}
                inputType='interest'
                placeholder='Area of interest'/>
            <RegistrationFormInput
                titleText='Bio / Description'
                htmlFor='description'
                innerRef={null}
                id={5}
                inputType='type'
                placeholder='Bio / Description'/>
        </div>
    )
}

export default ContentForThirdStep;