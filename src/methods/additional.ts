"use server";
import { LoginUser } from "../actions/login";
import { registerUser, sendCode, verifyCode } from "../actions/register";
import { getProject, LogOut } from "../actions/auth";

type Login = {
  email: string;
  password: string;
};

type Register = {
  email: string;
  password: string;
  profile_picture?: string;
};

//additional method for login
export const login = async ({ email, password }: Login) => {
  const { project_id } = await getProject();
  const res = await LoginUser({
    email: email,
    password: password,
    project_id: project_id,
  });
  return res;
};

//send verification code to email address
export const sendEmailVerificationCode = async ({
  email,
}: {
  email: string;
}) => {
  const res = await sendCode({ email: email });
  return res;
};

//verify code sent to email address
export const verifyVerificationCode = async ({
  email,
  code,
}: {
  email: string;
  code: string;
}) => {
  const res = await verifyCode({ email: email, code: code });
  return res;
};

//register a new user
export const register = async ({ email, password }: Register) => {
  const { project_id } = await getProject();
  const res = await registerUser({
    email: email,
    password: password,
    project_id: project_id,
  });
  return res;
};

export const logout = async () => {
  await LogOut();
  return;
};
