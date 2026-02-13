// Create user query hook, with GET request to /users/:id endpoint
// method getUserById -> (id: string) -> returns user data
// loading state, error state



// const data = await getUserById()

import {useCallback, useEffect, useState} from "react";
import {getUserById} from "../services/onboardingForm.services.ts";
import type {User} from "../services/onboardingForm.model.ts";

function useUser(userId:string) {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserById = useCallback(async (id: string) => {
        try{
            const data = await getUserById(id);
            return data;
        } catch(e:any) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }, [setError])

    const refetch = () => {
        fetchUserById(userId).then(user => setUserInfo(user));
    }

    useEffect(() => {
        // TODO: call fetchUserById only if userId is not null
        fetchUserById(userId)
            .then((userInfo) => setUserInfo(userInfo || null));
    }, [userId, fetchUserById])

    console.log(userInfo)

    return { userInfo, isLoading, error, refetch }
}

export default useUser;