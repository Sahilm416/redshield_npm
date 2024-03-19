"use strict";
"use server";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var forgotPassword_exports = {};
__export(forgotPassword_exports, {
  changePassword: () => changePassword,
  checkResetPasswordToken: () => checkResetPasswordToken,
  sendResetPasswordLink: () => sendResetPasswordLink
});
module.exports = __toCommonJS(forgotPassword_exports);
var import_auth = require("./auth");
const sendResetPasswordLink = async ({
  email,
  url
}) => {
  try {
    const key = await (0, import_auth.getEnv)();
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
    const key = await (0, import_auth.getEnv)();
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
    const key = await (0, import_auth.getEnv)();
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  changePassword,
  checkResetPasswordToken,
  sendResetPasswordLink
});
//# sourceMappingURL=forgotPassword.js.map