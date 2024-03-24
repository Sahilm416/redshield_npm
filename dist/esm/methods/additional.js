"use server";
import { LoginUser } from "../actions/login";
import { registerUser, sendCode, verifyCode } from "../actions/register";
import { getProject, LogOut } from "../actions/auth";
import {
  sendResetPasswordLink,
  checkResetPasswordToken,
  changePassword as changePass
} from "../actions/forgotPassword";
const login = async ({ email, password }) => {
  const { project_id } = await getProject();
  const res = await LoginUser({
    email,
    password,
    project_id
  });
  return res;
};
const sendEmailVerificationCode = async ({
  email
}) => {
  const res = await sendCode({ email });
  return res;
};
const verifyVerificationCode = async ({
  email,
  code
}) => {
  const res = await verifyCode({ email, code });
  return res;
};
const register = async ({ email, password }) => {
  const { project_id } = await getProject();
  const res = await registerUser({
    email,
    password,
    project_id
  });
  return res;
};
const logout = async () => {
  await LogOut();
  return;
};
const resetPassword = async ({
  email,
  site
}) => {
  const res = await sendResetPasswordLink({ email, url: site });
  return res;
};
const checkToken = async ({ token }) => {
  const res = await checkResetPasswordToken({ token });
  return res;
};
const changePassword = async ({
  email,
  password,
  token
}) => {
  const res = await changePass({
    email,
    password,
    token
  });
  return res;
};
export {
  changePassword,
  checkToken,
  login,
  logout,
  register,
  resetPassword,
  sendEmailVerificationCode,
  verifyVerificationCode
};
//# sourceMappingURL=additional.js.map