import Form from "../Form/Form.tsx";

const RegistrationForm = () => {
    return (
        <div className='registration-form-wrapper'>
            <Form className='registration-form'>
                <div className='form-header d-flex flex-column align-center'>
                    <h1 className='form-title'>Registration Form</h1>
                    <h3 className='form-text'>Please fill out this form with the required information</h3>
                </div>
            </Form>
        </div>
    )
}

export default RegistrationForm;