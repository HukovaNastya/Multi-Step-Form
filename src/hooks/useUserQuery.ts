import {useCallback, useEffect, useState} from "react";
import {getUserById} from "../services/onboardingForm.services.ts";
import type {User} from "../services/onboardingForm.model.ts";

function useUser(userId:string) {
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUserById = useCallback(async (id: string) => {
        if(!id) return;
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
        if(!userId) return;
        fetchUserById(userId).then((user) => {
            if(user){
                setUserInfo(user)
            }
        });

    }

    useEffect(() => {
        if(!userId) return;
        fetchUserById(userId)
            .then((userInfo) => setUserInfo(userInfo || null));
    }, [userId, fetchUserById])

    console.log(userInfo);


    return { userInfo, isLoading, error, refetch }
}

export default useUser;