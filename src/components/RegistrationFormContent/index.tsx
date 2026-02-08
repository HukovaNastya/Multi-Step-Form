import ContentForFirstStep from "./ContentForFirstStep.tsx";
import ContentForSecondStep from "./ContentForSecondStep.tsx";
import ContentForThirdStep from "./ContentForThirdStep.tsx";

type RegistrationFormContentProps = {
    step: number;
    onTriggerNext: () => void;
    onTriggerPrev: () => void;
}

const RegistrationFormContent = ({ step, onTriggerNext, onTriggerPrev }: RegistrationFormContentProps) => {
    return (
        <div className='form-inner-wrapper'>
            {
                step === 0 ?
                    <ContentForFirstStep onTriggerNext={onTriggerNext}/> :
                    step === 1 ? <ContentForSecondStep onTriggerNext={onTriggerNext} onTriggerPrevious={onTriggerPrev}/> :
                        <ContentForThirdStep/>
            }
        </div>
    )
}

export default RegistrationFormContent;