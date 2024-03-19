"use server";
import { getEnv } from "./auth";
const sendResetPasswordLink = async ({
  email,
  url
}) => {
  try {
    const key = await getEnv();
    const res = await fetch(
      "https://redshield.vercel.app/api/service/resetPassword",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key
        },
        body: JSON.stringify({
          email: email.trim(),
          endpoint: `${url}/ResetPassword`
        })
      }
    );
    const response = await res.json();
    return {
      status: response.status,
      message: response.message
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "sometghing went wrong"
    };
  }
};
const checkResetPasswordToken = async ({ token }) => {
  try {
    const key = await getEnv();
    const res = await fetch(
      "https://redshield.vercel.app/api/service/checkPasswordToken",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key
        },
        body: JSON.stringify({
          token
        })
      }
    );
    const response = await res.json();
    return {
      status: response.status,
      message: response.message,
      email: response.data,
      token
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong",
      email: "",
      token: ""
    };
  }
};
const changePassword = async ({
  password,
  email,
  token
}) => {
  try {
    const key = await getEnv();
    const res = await fetch(
      "https://redshield.vercel.app/api/service/changePassword",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key
        },
        body: JSON.stringify({
          token,
          email,
          password
        })
      }
    );
    const response = await res.json();
    return {
      status: response.status,
      message: response.message
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong"
    };
  }
};
export {
  changePassword,
  checkResetPasswordToken,
  sendResetPasswordLink
};
//# sourceMappingURL=forgotPassword.js.map