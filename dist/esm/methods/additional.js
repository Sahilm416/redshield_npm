"use server";
import { LoginUser } from "../actions/login";
import { registerUser, sendCode, verifyCode } from "../actions/register";
import { getProject } from "../actions/auth";
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
export {
  login,
  register,
  sendEmailVerificationCode,
  verifyVerificationCode
};
//# sourceMappingURL=additional.js.map