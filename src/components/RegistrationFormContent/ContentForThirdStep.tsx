import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";
import {useOnboardingFormApi, useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
import Button from "../Button/Button.tsx";
import type {ChangeEvent} from "react";

type ContentForThirdStepProps = {
    onTriggerSubmit: () => void;
    onTriggerPrevious: () => void;
}


const ContentForThirdStep= (props: ContentForThirdStepProps) => {
    const {secondForm} = useOnboardingFormData();
    const { updateSecondFormField } = useOnboardingFormApi()

    const onAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateSecondFormField("age", e.target.value)
    }

    const onInterestChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateSecondFormField("interest", e.target.value)
    }

    const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateSecondFormField("description", e.target.value)
    }
    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Age'
                htmlFor='age'
                onChange={onAgeChange}
                value={secondForm.age}
                id={3}
                inputType='number'
                placeholder='Age'
            />
            <RegistrationFormInput
                titleText='Area of interest'
                htmlFor='interest'
                onChange={onInterestChange}
                value={secondForm.interest}
                id={4}
                inputType='interest'
                placeholder='Area of interest'/>
            <RegistrationFormInput
                titleText='Bio / Description'
                htmlFor='description'
                onChange={onDescriptionChange}
                value={secondForm.description}
                id={5}
                inputType='type'
                placeholder='Bio / Description'/>
            <div className='form-buttons d-flex justify-end'>
                <div>
                    <Button
                        className='form-button text-medium form-text'
                        onClick={() => {props.onTriggerPrevious()}}
                        type='button'
                    >
                        Previous
                    </Button>
                </div>
                <div>
                    <Button
                        className='form-button text-medium form-text active-button'
                        onClick={() =>{props.onTriggerSubmit()}}
                        type='button'
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContentForThirdStep;