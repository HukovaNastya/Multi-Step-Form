import {createContext, useCallback, useContext, useMemo, useState} from "react";
import localStorageService from "../hooks/useStorage.tsx";
import useUserMutation from "../hooks/useUserMutation.ts";

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
    userId: string;
};

type FormContextApi = {
    setAccountTypeValue: (type: string) => void;
    updateFirstFormField: (field: keyof FirstForm, value: string) => void;
    updateSecondFormField: (field: keyof SecondForm, value: string) => void;
    resetUserData: () => void;
    setStep: (step: number) => void;
    setModalOpen: (value: boolean) => void;
    sentUserData: () => void;
    onTriggerNext: () => void;
    onTriggerPrevious: () => void;
    onFormSubmit: (e: any) => void;
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
    userId: "",
});

const OnboardingFormContextApi = createContext<FormContextApi>({
    setAccountTypeValue: () => {},
    updateFirstFormField: () => {},
    updateSecondFormField: () => {},
    resetUserData: () => {},
    setStep: () => {},
    setModalOpen: () => {},
    sentUserData: () => {},
    onTriggerNext: () => {},
    onTriggerPrevious: () => {},
    onFormSubmit: () => {}
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
    // TODO: move it separate custom hook
    const [userId, setUserId] = useState(() => {
        const storedId = localStorage.getItem(storageKeys.UserId)
        return storedId ? JSON.parse(storedId) : "";
    });
    // TODO: move it to particular component where it is used
    const { createUser } = useUserMutation();

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

    const resetFirstForm = () => {
        localStorage.removeItem(storageKeys.FirstForm)
        setFirstForm({ name: "", email: "", password: "" });
    }

    const resetSecondForm = () => {
        localStorage.removeItem(storageKeys.SecondForm);
        setSecondForm({age: "", interest: "", description: ""});
    }

    const resetAccountType = () => {
        localStorage.removeItem(storageKeys.AccountType);
        setAccountType({type: "personal"})
    }

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        setModalOpen(true);
    }

    const updateSecondFormField = useCallback((field: keyof SecondForm, value: string) => {
        setSecondForm(prevState => {
            const newState = {...prevState, [field]: value}
            localStorage.setItem(storageKeys.SecondForm, JSON.stringify(newState))
            return newState
        })
    }, []);

    const resetUserData = useCallback(() => {
        resetFirstForm();
        resetSecondForm();
        resetAccountType();
        setStep(0);
        setModalOpen(false);
    }, []);

    // TODO: Should be moved to specific component "Modal"
    const sentUserData = useCallback(async() => {
        const data = await createUser({
            name: firstForm.name,
            age: parseFloat(secondForm.age),
            email: firstForm.email,
            accountType: accountType.type,
            password: firstForm.password,
            interests: secondForm.interest,
            description: secondForm.description,
        })
        setUserId(data?.id);
        localStorage.setItem(storageKeys.UserId, JSON.stringify(data?.id))
        resetUserData()
        // resetFirstForm();
        // resetSecondForm();
        // resetAccountType();
        // setStep(0);
        // setModalOpen(false)
    }, [firstForm, secondForm, accountType, createUser, setModalOpen]);


    const onTriggerNext = () => {
       setStep(step + 1);
    }

    const onTriggerPrevious = () => {
        setStep(step - 1);
    }

    const data = useMemo(() => ({
            accountType,
            firstForm,
            secondForm,
            isModalOpen,
            step,
            userId
    }), [accountType, firstForm, secondForm, isModalOpen, step, userId]);



    const api = useMemo(() => ({
        setAccountTypeValue,
        updateFirstFormField,
        updateSecondFormField,
        resetUserData,
        setStep,
        setModalOpen,
        sentUserData,
        onTriggerNext,
        onTriggerPrevious,
        onFormSubmit
    }), [setAccountTypeValue, updateFirstFormField,  updateSecondFormField, resetUserData, setStep, setModalOpen, sentUserData, onTriggerNext, onTriggerPrevious, onFormSubmit]);


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

export { OnboardingFormProvider, useOnboardingFormData, useOnboardingFormApi}