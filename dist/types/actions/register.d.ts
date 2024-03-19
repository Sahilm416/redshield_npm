export declare const sendCode: ({ email }: {
    email: string;
}) => Promise<{
    status: boolean;
    message: any;
}>;
export declare const verifyCode: ({ code, email, }: {
    code: string;
    email: string;
}) => Promise<{
    status: any;
    message: any;
}>;
export declare const registerUser: (data: {
    email: string;
    password: string;
    project_id: string;
    profile_picture?: string;
}) => Promise<{
    status: any;
    message: any;
}>;
//# sourceMappingURL=register.d.ts.map