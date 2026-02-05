import './App.css'
import RegistrationForm from "./components/RegistrationForm/RegistrationForm.tsx";
import {OnboardingFormProvider} from "./context/OnboardingFormContext.tsx";

function App() {

  return (
    <div className='container'>
        <OnboardingFormProvider>
            <RegistrationForm/>
        </OnboardingFormProvider>
    </div>
  )
}

export default App
