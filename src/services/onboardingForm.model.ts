export interface OnboardingFormBody{
    name: string;
    age: number;
    email: string;
    accountType: string;
    password: string;
    interests: string;
    description: string;
}

export interface User extends OnboardingFormBody {
    id: string;
}