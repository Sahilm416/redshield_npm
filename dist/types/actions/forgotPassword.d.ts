export declare const sendResetPasswordLink: ({ email, url, }: {
    email: string;
    url: string;
}) => Promise<{
    status: boolean;
    message: string;
}>;
export declare const checkResetPasswordToken: ({ token }: {
    token: string;
}) => Promise<{
    status: boolean;
    message: string;
    email: string;
    token: string;
}>;
export declare const changePassword: ({ password, email, token, }: {
    password: string;
    email: string;
    token: string;
}) => Promise<{
    status: boolean;
    message: string;
}>;
//# sourceMappingURL=forgotPassword.d.ts.map