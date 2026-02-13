import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import UsersInfoPage from "./pages/UsersInfoPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import {OnboardingFormProvider} from "./context/OnboardingFormContext.tsx";

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
    <OnboardingFormProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about-user" element={<UsersInfoPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </OnboardingFormProvider>
);