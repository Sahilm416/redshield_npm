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
var register_exports = {};
__export(register_exports, {
  registerUser: () => registerUser,
  sendCode: () => sendCode,
  verifyCode: () => verifyCode
});
module.exports = __toCommonJS(register_exports);
var import_auth = require("./auth");
var import_login = require("./login");
const sendCode = async ({ email }) => {
  const key = await (0, import_auth.getEnv)();
  try {
    const exist = await fetch(
      "https://redshield.vercel.app/api/service/exist",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key
        },
        body: JSON.stringify({
          email
        })
      }
    );
    const existResponse = await exist.json();
    if (!existResponse.status) {
      return {
        status: false,
        message: existResponse.message
      };
    }
    await fetch("https://redshield.vercel.app/api/service/sendCode", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: key
      },
      body: JSON.stringify({
        email
      })
    });
    return {
      status: true,
      message: "email sent successfully"
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      message: "error sending email"
    };
  }
};
const verifyCode = async ({
  code,
  email
}) => {
  const key = await (0, import_auth.getEnv)();
  try {
    const res = await fetch(
      "https://redshield.vercel.app/api/service/verifyCode",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key
        },
        body: JSON.stringify({
          email,
          code
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
const registerUser = async (data) => {
  const key = await (0, import_auth.getEnv)();
  try {
    const res = await fetch(
      "https://redshield.vercel.app/api/service/register",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          project_id: data.project_id
        })
      }
    );
    const response = await res.json();
    if (response.status) {
      await (0, import_login.LoginUser)({
        email: data.email,
        password: data.password,
        project_id: data.project_id
      });
    }
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
  registerUser,
  sendCode,
  verifyCode
});
//# sourceMappingURL=register.js.map