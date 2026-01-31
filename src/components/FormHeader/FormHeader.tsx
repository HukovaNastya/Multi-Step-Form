import Typography from "../Typography/Typography.tsx";

const FormHeader = () => {
    return (
        <div className='form-header d-flex flex-column align-center'>
            <Typography className='form-title' >
                Registration Form
            </Typography>
            <Typography className='form-text' variant='h3'>
                Please fill out this form with the required information
            </Typography>
        </div>
    )
}

export default FormHeader;