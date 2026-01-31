import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";

const RegistrationForm = () => {
    return (
        <div className='registration-form-wrapper'>
            <Form className='registration-form'>
                <div className='d-flex flex-column align-center'>
                    <FormHeader/>
                </div>
                <div className='form-inner-wrapper'>
                    <div className='form-progress-bar'>

                    </div>
                    <div className='form-account-options'>

                    </div>
                    <div className='form-buttons'>

                    </div>
                </div>
            </Form>
        </div>
    )
}

export default RegistrationForm;