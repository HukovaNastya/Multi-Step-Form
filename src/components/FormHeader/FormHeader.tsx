import Typography from "../Typography/Typography.tsx";

const FormHeader = () => {
    return (
        <div className='form-header d-flex flex-column align-center'>
            <div>
                <Typography className='form-title text-large' >
                    Registration Form
                </Typography>
            </div>
            <div>
                <Typography className='form-text text-medium' variant='h3'>
                    Please fill out this form with the required information
                </Typography>
            </div>
        </div>
    )
}

export default FormHeader;