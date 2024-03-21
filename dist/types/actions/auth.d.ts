export declare const getEnv: () => Promise<string>;
export declare const getProject: () => Promise<{
    status: boolean;
    message: any;
    project_name: any;
    project_id: any;
}>;
export declare const getSession: () => Promise<{
    status: boolean;
    message: string;
    data?: undefined;
} | {
    status: any;
    message: any;
    data: any;
}>;
export declare const LogOut: () => Promise<{
    status: boolean;
    message: string;
}>;
export declare const resetPassword: () => Promise<void>;
//# sourceMappingURL=auth.d.ts.map