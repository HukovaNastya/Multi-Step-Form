import {createContext, useContext, useMemo, useRef} from "react";

type FirstForm = {
    name: string;
    email: string;
    password: string | null;
};

type FormContextValue = {
    firstForm: React.RefObject<FirstForm>;
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

    const data = useMemo(() => ({ accountType, firstForm }), [accountType, firstForm]);
    const api = useMemo(() => ({ open, close }), [close, open]);


    return (
        <OnboardingFormContextData value={data}>
            <OnboardingFormContextApi value={api}>
                {children}
            </OnboardingFormContextApi>
        </OnboardingFormContextData>
    );
}

const useOnboardingFormData = () => useContext(OnboardingFormContextData);
const useOnboardingFormApi = () => useContext(OnboardingFormContextApi);

export { OnboardingFormProvider, useOnboardingFormData, useOnboardingFormApi}