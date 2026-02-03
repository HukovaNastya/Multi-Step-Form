import Form from "../Form/Form.tsx";
import FormHeader from "../FormHeader/FormHeader.tsx";
import RegistrationFormContent from "../RegistrationFormContent";
import {useForm} from "../../context/FormContext.tsx";

const RegistrationForm = () => {
    const {userName, userEmail, userPassword} = useForm()

    console.log(userName)
    console.log('email', userEmail)
    console.log('password', userPassword)

    const onFormSubmit=(e:any) => {
        e.preventDefault()
    }
    return (
        <div className='registration-form-wrapper'>
            <Form className='registration-form' onSubmit={onFormSubmit}>
                <div className='d-flex flex-column align-center'>
                    <FormHeader/>
                </div>
                <RegistrationFormContent/>
            </Form>
        </div>
    )
}

export default RegistrationForm;