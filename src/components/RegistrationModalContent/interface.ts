export const Contents = {
    Info: 'Info',
    Loading: 'Loading',
    Error: 'Error',
} as const;

export type Content = keyof typeof Contents;



