import Typography from "../Typography/Typography.tsx";
import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";

const RegistrationModalInfoContent = () => {
    const { accountType, firstForm, secondForm } = useOnboardingFormData();
    return (
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
    )
}

export default RegistrationModalInfoContent;