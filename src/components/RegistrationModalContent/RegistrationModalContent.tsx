import Typography from "../Typography/Typography.tsx";
import Button from "../Button/Button.tsx";
import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
import "./RegistrationModalContent.css";

const RegistrationModalContent = ({title}:{title:string}) => {
    const { accountType, firstForm, secondForm } = useOnboardingFormData();
    return (
        <div className='d-flex flex-column registration-modal-content-wrapper'>
            <div className='registration-modal-content-header'>
                <Typography className='form-title text-large' >
                    {title}
                </Typography>
            </div>
            <div className='registration-modal-content d-flex flex-column'>
                <div className='modal-content-item d-flex'>
                    <Typography variant='h4' className='form-text  modal-text modal-content-title' >
                        Account Type:
                    </Typography>
                    <Typography variant='h4' className='form-text  modal-subtext  modal-content-subtext' >
                        {accountType.type}
                    </Typography>
                </div>
                <div className='d-flex modal-content-item'>
                    <Typography variant='h4' className='form-text  modal-text modal-content-title' >
                        Name:
                    </Typography>
                    <Typography variant='h4' className='form-text  modal-subtext  modal-content-subtext' >
                        {firstForm.name}
                    </Typography>
                </div>
                <div className='d-flex modal-content-item'>
                    <Typography variant='h4' className='form-text  modal-text modal-content-title' >
                        Email:
                    </Typography>
                    <Typography variant='h4' className='form-text  modal-subtext  modal-content-subtext' >
                        {firstForm.email}
                    </Typography>
                </div>
                <div className='d-flex modal-content-item'>
                    <Typography variant='h4' className='form-text  modal-text modal-content-title' >
                        Age:
                    </Typography>
                    <Typography variant='h4' className='form-text  modal-subtext  modal-content-subtext' >
                        {secondForm.age}
                    </Typography>
                </div>
                <div className='d-flex modal-content-item'>
                    <Typography variant='h4' className='form-text  modal-text modal-content-title' >
                        Area of Interest:
                    </Typography>
                    <Typography variant='h4' className='form-text  modal-subtext  modal-content-subtext' >
                        {secondForm.interest}
                    </Typography>
                </div>
                <div className='d-flex modal-content-item'>
                    <Typography variant='h4' className='form-text  modal-text modal-content-title' >
                        Bio/Description:
                    </Typography>
                    <Typography variant='h4' className='form-text  modal-subtext  modal-content-subtext' >
                        {secondForm.description}
                    </Typography>
                </div>
            </div>
            <div className='form-buttons d-flex justify-end registration-modal-content-button'>
                <div>
                    <Button
                        className='form-button text-medium form-text'
                        // onClick={() => {props.onTriggerPrevious()}}
                        type='button'
                    >
                        Reset
                    </Button>
                </div>
                <div>
                    <Button
                        className='form-button text-medium form-text active-button'
                        // onClick={() =>{props.onTriggerSubmit()}}
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
