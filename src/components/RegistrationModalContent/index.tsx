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