import ContentForFirstStep from "./ContentForFirstStep.tsx";
import ContentForSecondStep from "./ContentForSecondStep.tsx";
import ContentForThirdStep from "./ContentForThirdStep.tsx";

const RegistrationFormContent = ({step}:{step: number}) => {
    return (
        <div className='form-inner-wrapper'>

            {
                step === 0 ?  <ContentForFirstStep/> : step === 1 ? <ContentForSecondStep/> : <ContentForThirdStep/>
            }

        </div>
    )
}

export default RegistrationFormContent;


// import ContentForFirstStep from "./ContentForFirstStep.tsx";
// import ContentForSecondStep from "./ContentForSecondStep.tsx";
// import ContentForThirdStep from "./ContentForThirdStep.tsx";
//
// export const Steps = {
//     FirstStep: "FirstStep",
//     SecondStep: "SecondStep",
//     ThirdStep: "ThirdStep"
// } as const;
//
// export type Step = keyof typeof Steps;
//
// const ComponentsMapping = {
//     [Steps.FirstStep]: ContentForFirstStep,
//     [Steps.SecondStep]: ContentForSecondStep,
//     [Steps.ThirdStep]: ContentForThirdStep
// }
//
// type RegistrationFormContentProps = {
//     step: Step;
// }
//
// const RegistrationFormContent = ({ step }: RegistrationFormContentProps) => {
//     const Component = ComponentsMapping[step]
//
//     return (
//         <div className='form-inner-wrapper'>
//             <Component/>
//         </div>
//     )
// }
//
// export default RegistrationFormContent;