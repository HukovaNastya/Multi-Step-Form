import type {OnboardingFormBody} from "./onboardingForm.model.ts";
import request from "./axios.ts";

export async function createUser(body:OnboardingFormBody) {
    const { data } = await request.post("/users", body)
    return data;
}