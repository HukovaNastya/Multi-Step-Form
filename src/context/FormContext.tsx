import {createContext, useCallback, useContext, useMemo, useState} from "react";

type FormContextValue = {
    accountType: string;
    userName: string;
    setAccountType: React.Dispatch<React.SetStateAction<string>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userNameRef?:any;
    userEmail?:any;
    setUserEmail?:any;
    userAge?:any;
    setUserAge?:any;
    userInterest?:any;
    setUserInterest?:any;
    userDescription?:any;
    setUserDescription?:any;
    userPassword?:any;
    setUserPassword?:any;
};

// type FirstFormContextValue = {
//   accountType: string;
// };
//
// type SecondFormContextValue = {
//   name: string;
//   email: string;
//   age: number;
// };

const FormContext = createContext<FormContextValue | undefined>(undefined);

type FormProviderProps = {
    children: React.ReactNode;
};


function FormProvider({ children }: FormProviderProps) {

    // Example
    // const [secondForm, setSecondForm] = useState<SecondFormContextValue>({ name: "", email: "", age: 0});
    // const updateSecondForm = useCallback((data: SecondFormContextValue) => setSecondForm(data), []);
    //
    // const data = useMemo(() => ({ secondForm}), [secondForm]);
    // const api = useMemo(() => ({ updateSecondForm}), [updateSecondForm]);
    // Example end


    const [ accountType, setAccountType] = useState("")

    const [ userName, setUserName ] = useState("")
    const [ userEmail, setUserEmail ] = useState("")
    const [ userAge, setUserAge ] = useState(null)

    const [ userPassword, setUserPassword ] = useState(null)
    const [ userInterest, setUserInterest ] = useState("")
    const [ userDescription, setUserDescription ] = useState("")

    const value: FormContextValue = useMemo(() => ({
        accountType,
        userName,
        setAccountType,
        setUserName,
        userEmail,
        setUserEmail,
        userAge, setUserAge,
        userInterest, setUserInterest,
        userDescription, setUserDescription,
        userPassword, setUserPassword
    }), [userName, userEmail, userPassword, userAge, userInterest, userDescription, accountType]);


    return (
        <FormContext.Provider value={value}>
           {children}
        </FormContext.Provider>
    );
}

function useForm() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }

    return context;
}

export { FormProvider, useForm }