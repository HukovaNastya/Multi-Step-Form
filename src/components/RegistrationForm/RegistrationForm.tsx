import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";
import RegistrationFormContent from "../RegistrationFormContent";

const RegistrationForm = () => {
    return (
        <div className='registration-form-wrapper'>
            <Form className='registration-form'>
                <div className='d-flex flex-column align-center'>
                    <FormHeader/>
                </div>
                <RegistrationFormContent/>
            </Form>
        </div>
    )
}

export default RegistrationForm;