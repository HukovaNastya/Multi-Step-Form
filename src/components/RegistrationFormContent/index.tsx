import ContentForFirstStep from "./ContentForFirstStep.tsx";
import ContentForSecondStep from "./ContentForSecondStep.tsx";
import ContentForThirdStep from "./ContentForThirdStep.tsx";

const RegistrationFormContent = ({step}:any) => {
    return (
        <div className='form-inner-wrapper'>

            {
                step === 0 ?  <ContentForFirstStep/> : step === 1 ? <ContentForSecondStep/> : <ContentForThirdStep/>
            }

        </div>
    )
}

export default RegistrationFormContent;