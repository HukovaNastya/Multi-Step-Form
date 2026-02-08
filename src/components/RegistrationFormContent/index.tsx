import ContentForFirstStep from "./ContentForFirstStep.tsx";
import ContentForSecondStep from "./ContentForSecondStep.tsx";
import ContentForThirdStep from "./ContentForThirdStep.tsx";

type RegistrationFormContentProps = {
    step: number;
    onTriggerNext: () => void;
    onTriggerPrev: () => void;
    onTriggerSubmit: () => void;
}

const RegistrationFormContent = ({ step, onTriggerNext, onTriggerPrev, onTriggerSubmit }: RegistrationFormContentProps) => {
    return (
        <div className='form-inner-wrapper'>
            {
                step === 0 ?
                    <ContentForFirstStep onTriggerNext={onTriggerNext}/> :
                    step === 1 ? <ContentForSecondStep onTriggerNext={onTriggerNext} onTriggerPrevious={onTriggerPrev}/> :
                        <ContentForThirdStep onTriggerPrevious={onTriggerPrev} onTriggerSubmit={onTriggerSubmit}/>
            }
        </div>
    )
}

export default RegistrationFormContent;