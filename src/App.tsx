import './App.css'
import RegistrationForm from "./components/RegistrationForm/RegistrationForm.tsx";
import {OnboardingFormProvider} from "./context/OnboardingFormContext.tsx";
import useUserMutation from "./hooks/useUserMutation.ts";

function App() {
    const { createUser, loading, error } = useUserMutation();

    const onCreateUserHandler = async () => {
        await createUser({
            name: "Tesst",
            age: 36,
            email: "test@tess",
            accountType: "personal",
            password: "12456",
            interests: "test",
            description: "some description"
        })
    }

  return (
    <div className='container'>
        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        <div><button onClick={onCreateUserHandler}>Test create user</button></div>

        <OnboardingFormProvider>
            <RegistrationForm/>
        </OnboardingFormProvider>
    </div>
  )
}

export default App
