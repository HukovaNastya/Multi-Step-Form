import RegistrationFormInput from "../RegistrationFormInput/RegistrationFormInput.tsx";
import {useOnboardingFormApi, useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
import Button from "../Button/Button.tsx";
import { debounce } from '../../utils/debounce.ts'
import type {ChangeEvent} from "react";

type ContentForSecondStepProps = {
    onTriggerNext: () => void;
    onTriggerPrevious: () => void;
}

const ContentForSecondStep = (props: ContentForSecondStepProps) => {
    const { firstForm } = useOnboardingFormData();
    const { updateFirstFormField } = useOnboardingFormApi()

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFirstFormField("name", e.target.value)
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFirstFormField("email", e.target.value)
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateFirstFormField("password", e.target.value)
    }

    return (
        <div className='content-wrapper'>
            <RegistrationFormInput
                titleText='Name'
                htmlFor='name'
                onChange={debounce(onNameChange, 500)}
                inputType='text'
                placeholder='Name'
                value={firstForm.name}
            />
            <RegistrationFormInput
                titleText='Email'
                htmlFor='email'
                onChange={debounce(onEmailChange, 500)}
                inputType='email'
                value={firstForm.email}
                placeholder='Email'
            />
            <RegistrationFormInput
                titleText='Password'
                htmlFor='password'
                value={firstForm.password}
                onChange={debounce(onPasswordChange, 500)}
                inputType='password'
                placeholder='Password'/>

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
                            onClick={() => {props.onTriggerNext()}}
                            type='button'
                        >
                            Next
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default ContentForSecondStep;