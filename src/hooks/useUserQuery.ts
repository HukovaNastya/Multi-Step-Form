// Create user query hook, with GET request to /users/:id endpoint
// method getUserById -> (id: string) -> returns user data
// loading state, error state



// const data = await getUserById()

import {useCallback, useEffect, useState} from "react";
import {getUserById} from "../services/onboardingForm.services.ts";

function useUser(userId:string) {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserById = useCallback(async(id:string) => {
        try{
            const res = await getUserById(id);
            return res.data;
        }catch(e:any){
            setError(e);
        }finally{
            setIsLoading(false);
        }

    }, [setError])

    const refetch = () => {
        fetchUserById(userId).then(user => setUserInfo(user));
    }

    useEffect(() => {
        fetchUserById(userId).then((userInfo) => setUserInfo(userInfo));
    }, [userId, fetchUserById])

    console.log(userInfo)

    return {userInfo, isLoading, error, refetch}
}

export default useUser;