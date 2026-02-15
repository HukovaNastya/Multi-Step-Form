export const Steps = {
    FirstStep: 'FirstStep',
    SecondStep: 'SecondStep',
    ThirdStep: 'ThirdStep',
} as const;

export type Step = keyof typeof Steps;
