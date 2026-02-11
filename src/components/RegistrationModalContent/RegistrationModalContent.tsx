import type {JSX} from "react";
import Typography from "../Typography/Typography.tsx";
import Button from "../Button/Button.tsx";
import {useOnboardingFormApi} from "../../context/OnboardingFormContext.tsx";
import "./RegistrationModalContent.css";
import {ComponentsMapping} from "./helper.ts";
import type {Content} from "./interface.ts";


type RegistrationModalContentProps = {
    content: Content;
    title: string;
}

const RegistrationModalContent = ({content, title}:RegistrationModalContentProps) => {
    const {onTriggerReset, onTriggerSent  } = useOnboardingFormApi();

    let Component: () => JSX.Element = ComponentsMapping[content];

    return (
        <div className='d-flex flex-column registration-modal-content-wrapper'>
            <div className='registration-modal-content-header'>
                <Typography className='form-title text-large' >
                    {title}
                </Typography>
            </div>
            <Component/>
            <div className='form-buttons d-flex justify-end registration-modal-content-button'>
                <div>
                    <Button
                        className='form-button text-medium form-text'
                        onClick={() => onTriggerReset()}
                        type='button'
                    >
                        Reset
                    </Button>
                </div>
                <div>
                    <Button
                        className='form-button text-medium form-text active-button'
                        onClick={() =>onTriggerSent()}
                        type='button'
                    >
                        Sent
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationModalContent;
