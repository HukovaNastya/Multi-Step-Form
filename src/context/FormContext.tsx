import {createContext, useContext, useMemo, useState} from "react";

type FormContextValue = {
    accountType: string;
    userName: string;
    setAccountType: React.Dispatch<React.SetStateAction<string>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    isUserLoading: boolean;
};


const FormContext = createContext<FormContextValue | undefined>(undefined);

type FormProviderProps = {
    children: React.ReactNode;
};


function FormProvider({ children }: FormProviderProps) {
    // const scenarioNameRef = useRef<HTMLInputElement | null>(null);
    // const [isDropDownActive, setDropdownActive] = useState(false);
    // const [isProjectNameDropDownActive, setProjectNameDropdownActive] = useState(false);
    // const [isFunctionNameDropDownActive, setFunctionNameDropdownActive] = useState(false);
    // const [isTestMethodDropDownActive, setTestMethodDropDownActive] = useState(false);
    // const [isFlowExecutorsDropDownActive, setFlowExecutorsDropDownActive] = useState(false);
    // const [isResultsStrategyDropDownActive, setResultsStrategyDropDownActive] = useState(false);
    // const [resultsStrategyItemName, setResultsStrategyItemNameItemName] = useState("");
    // const [flowExecutorItemName, setFlowExecutorItemNameItemName] = useState("");
    // const [defaultVersionStrategyItemName, setDefaultVersionStrategyItemName] = useState("");
    // const [isDefaultVersionStrategyDropDownActive, setDefaultVersionStrategyDropDownActive] = useState(false);
    // const [functionItemName, setFunctionItemName] = useState("");
    // const [projectItemName, setProjectItemName] = useState("");
    // const [testMethodItemName, setTestMethodItemName] = useState("");
    // const [testEnvironmentName, setEnvironmentName] = useState("");


    const [ accountType, setAccountType] = useState("")
    const [ userName, setUserName ] = useState("")
    const [ isUserLoading, setIsUserLoading ] = useState(false)
    //
    // useEffect(() => {
    //     setUserId(() => localStorage.getItem("userId"))
    // }, []);
    //
    // useEffect(() => {
    //     if (userId) {
    //         setIsUserLoading(true)
    //         getUserInfoById(userId)
    //             .then((data) => setUser(data.user))
    //             .catch(e => {
    //                 console.log("e", e)
    //             })
    //             .finally(() => setIsUserLoading(false));
    //     }
    // }, [ userId ])
    //
    //
    // const logout = () => {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("userId");
    //     setUser(null)
    // }

    const value: FormContextValue = useMemo(() => ({
        accountType,
        userName,
        isUserLoading,
        setAccountType,
        setUserName,
    }), [accountType, userName, setAccountType, setUserName, setIsUserLoading]);


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