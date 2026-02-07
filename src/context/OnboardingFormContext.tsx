import {createContext, useContext, useMemo, useRef} from "react";

type FirstForm = {
    name: string;
    email: string;
    password: string | null;
};

type AccountType = {
    accountType: string;
};

type SecondForm = {
    age: string;
    interest: string;
    description: string;
};

type FormContextValue = {
    firstForm: React.RefObject<FirstForm>;
    secondForm: React.RefObject<SecondForm>;
    accountType: React.RefObject<AccountType>;
};

type FormContextApi = {

}

const OnboardingFormContextData = createContext<FormContextValue | undefined>(undefined);
const OnboardingFormContextApi = createContext<FormContextApi| undefined>(undefined);

type FormProviderProps = {
    children: React.ReactNode;
};


function OnboardingFormProvider({ children }: FormProviderProps) {
    const accountType = useRef({
        accountType: "",
    });

    const firstForm = useRef({
        name: "",
        email: "",
        password: null,
    });

    const secondForm = useRef({
        age: "",
        interest: "",
        description: "",
    });

    const data = useMemo(() => ({ accountType, firstForm, secondForm }), [accountType, firstForm, secondForm]);
    const api = useMemo(() => ({ open, close }), [close, open]);


    return (
        <OnboardingFormContextData value={data}>
            <OnboardingFormContextApi value={api}>
                {children}
            </OnboardingFormContextApi>
        </OnboardingFormContextData>
    );
}

const useOnboardingFormData = () => {
    const context = useContext(OnboardingFormContextData);

    if (!context) {
        throw new Error(
            "useOnboardingFormData must be used within OnboardingFormProvider"
        );
    }

    return context;
};

const useOnboardingFormApi = () => useContext(OnboardingFormContextApi);

export { OnboardingFormProvider, useOnboardingFormData, useOnboardingFormApi}