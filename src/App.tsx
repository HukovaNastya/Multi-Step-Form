import './App.css'
import RegistrationForm from "./components/RegistrationForm/RegistrationForm.tsx";
import {FormProvider} from "./context/FormContext.tsx";

function App() {

  return (
    <div className='container'>
        <FormProvider>
            <RegistrationForm/>
        </FormProvider>
    </div>
  )
}

export default App
