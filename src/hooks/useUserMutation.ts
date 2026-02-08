import * as userApi from "../services/onboardingForm.services.ts";
import type {OnboardingFormBody} from "../services/onboardingForm.model.ts";
import {useState} from "react";

type ResponseError = {
    message: string;
}

const useUserMutation = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ResponseError | null>(null);

    const createUser = async (body: OnboardingFormBody) => {
        setLoading(true);

        try {
            const response = await userApi.createUser(body);
            console.log('User created successfully', response);
            return response
        } catch (error) {
            setError({ message: 'Failed to create user' });
            console.log('Error', error)
        } finally {
            setLoading(false);
        }
    }

    return { createUser, loading, error }
}

export default useUserMutation;