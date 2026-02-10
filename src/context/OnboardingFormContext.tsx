import {createContext, useCallback, useContext, useMemo, useState} from "react";
import localStorageService from "../hooks/useStorage.tsx";

type FirstForm = {
    name: string;
    email: string;
    password: string;
};

type AccountType = {
    type: string;
};

type SecondForm = {
    age: string;
    interest: string;
    description: string;
};

type FormContextValue = {
    firstForm: FirstForm;
    secondForm: SecondForm;
    accountType: AccountType;
    step:number;
    isModalOpen:boolean;
};

type FormContextApi = {
    setAccountTypeValue: (type: string) => void;
    updateFirstFormField: (field: keyof FirstForm, value: string) => void;
    updateSecondFormField: (field: keyof SecondForm, value: string) => void;
    onTriggerReset: () => void;
    setStep: (step: number) => void;
    setModalOpen: (value: boolean) => void;
}

const OnboardingFormContextData = createContext<FormContextValue>({
    firstForm: {
        name: "",
        email: "",
        password: ""
    },
    secondForm: {
        age: "",
        interest: "",
        description: "",
    },
    accountType: {
        type: "personal"
    },
    step:0,
    isModalOpen: false,
});

const OnboardingFormContextApi = createContext<FormContextApi>({
    setAccountTypeValue: () => {},
    updateFirstFormField: () => {},
    updateSecondFormField: () => {},
    onTriggerReset: () => {},
    setStep: () => {},
    setModalOpen: () => {},
});

type FormProviderProps = {
    children: React.ReactNode;
};

const storageKeys = localStorageService.Local_Storage_Keys;

function OnboardingFormProvider({ children }: FormProviderProps) {
    const [accountType, setAccountType] = useState<AccountType>({
        type: localStorage.getItem(storageKeys.AccountType) || "personal",
    });
    const [step, setStep] = useState(0);

    const [isModalOpen, setModalOpen] = useState(false);

    const [firstForm, setFirstForm] = useState<FirstForm>(() => {
        const storedForm = localStorage.getItem(storageKeys.FirstForm);
        return storedForm ? JSON.parse(storedForm) : { name: "", email: "", password: "" };
    });

    const [secondForm, setSecondForm] = useState<SecondForm>(() => {
        const secondStorageForm = localStorage.getItem(storageKeys.SecondForm);
        return secondStorageForm ? JSON.parse(secondStorageForm) : {age: "", interest: "", description: ""};
    });

    const setAccountTypeValue = useCallback((type: string) => {
        setAccountType({ type });
        localStorage.setItem(storageKeys.AccountType, type);
    }, [])

    const updateFirstFormField = useCallback((field: keyof FirstForm, value: string) => {
        setFirstForm(prevState => {
            const newState = {...prevState, [field]: value}
            localStorage.setItem(storageKeys.FirstForm, JSON.stringify(newState))
            return newState
        })
    }, []);

    const updateSecondFormField = useCallback((field: keyof SecondForm, value: string) => {
        setSecondForm(prevState => {
            const newState = {...prevState, [field]: value}
            localStorage.setItem(storageKeys.SecondForm, JSON.stringify(newState))
            return newState
        })
    }, []);

    const onTriggerReset = useCallback(() => {
        localStorage.setItem(storageKeys.FirstForm, "")
        localStorage.setItem(storageKeys.SecondForm, "")
        setAccountTypeValue("personal");
        setStep(0);
        return setModalOpen(false);
        // updateFirstFormField(name, "")

    }, []);

    const data = useMemo(() => ({
            accountType,
            firstForm,
            secondForm,
            isModalOpen,
            step,
    }),
        [accountType, firstForm, secondForm, isModalOpen, step, isModalOpen]);
    const api = useMemo(() => ({
        setAccountTypeValue,
        updateFirstFormField,
        updateSecondFormField,
        onTriggerReset,
        setStep,
        setModalOpen
    }),
        [setAccountTypeValue, updateFirstFormField,  updateSecondFormField, onTriggerReset, setStep, setModalOpen]);


    return (
        <OnboardingFormContextData value={data}>
            <OnboardingFormContextApi value={api}>
                {children}
            </OnboardingFormContextApi>
        </OnboardingFormContextData>
    );
}

const useOnboardingFormData = () => useContext(OnboardingFormContextData)
const useOnboardingFormApi = () => useContext(OnboardingFormContextApi);

// eslint-disable-next-line react-refresh/only-export-components
export { OnboardingFormProvider, useOnboardingFormData, useOnboardingFormApi}