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
export declare const logout: () => Promise<void>;
export declare const resetPassword: ({ email, site, }: {
    email: string;
    site: string;
}) => Promise<{
    status: boolean;
    message: string;
}>;
export declare const checkToken: ({ token }: {
    token: string;
}) => Promise<{
    status: boolean;
    message: string;
    email: string;
    token: string;
}>;
export declare const changePassword: ({ email, password, token, }: {
    email: string;
    password: string;
    token: string;
}) => Promise<{
    status: boolean;
    message: string;
}>;
export {};
//# sourceMappingURL=additional.d.ts.map