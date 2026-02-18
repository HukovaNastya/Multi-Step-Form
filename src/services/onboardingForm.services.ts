import type {OnboardingFormBody, User} from "./onboardingForm.model.ts";
import request from "./axios.ts";

export async function createUser(body:OnboardingFormBody) {
    const { data } = await request.post<User>("/users", body)
    return data;
}

export async function getUserById(id:string) {
    const response = await request.get<User>(`/users/${id}`)
    return response.data;
}