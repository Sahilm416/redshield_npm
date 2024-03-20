type Login = {
    email: string;
    password: string;
};
type Register = {
    email: string;
    password: string;
    profile_picture?: string;
};
export declare const login: ({ email, password }: Login) => Promise<{
    status: boolean;
    message: string;
}>;
export declare const sendEmailVerificationCode: ({ email, }: {
    email: string;
}) => Promise<{
    status: boolean;
    message: any;
}>;
export declare const verifyVerificationCode: ({ email, code, }: {
    email: string;
    code: string;
}) => Promise<{
    status: any;
    message: any;
}>;
export declare const register: ({ email, password }: Register) => Promise<{
    status: any;
    message: any;
}>;
export {};
//# sourceMappingURL=additional.d.ts.map