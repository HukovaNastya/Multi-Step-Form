import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
import RegistrationModalContentItem from "./RegistrationModalContentItem.tsx";

const RegistrationModalInfoContent = () => {
    const { accountType, firstForm, secondForm } = useOnboardingFormData();
    return (
        <div className='registration-modal-content d-flex flex-column'>
            <RegistrationModalContentItem title='Account Type:' text={accountType.type}/>
            <RegistrationModalContentItem title='Name:' text={firstForm.name}/>
            <RegistrationModalContentItem title='Email:' text={firstForm.email}/>
            <RegistrationModalContentItem title='Age:' text={secondForm.age}/>
            <RegistrationModalContentItem title='Area of Interest:' text={secondForm.interest}/>
            <RegistrationModalContentItem title='Bio/Description:' text={secondForm.description}/>
        </div>
    )
}

export default RegistrationModalInfoContent;