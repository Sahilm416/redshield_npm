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
var login_exports = {};
__export(login_exports, {
  LoginUser: () => LoginUser
});
module.exports = __toCommonJS(login_exports);
var import_headers = require("next/headers");
var import_auth = require("./auth");
const LoginUser = async ({
  email,
  password,
  project_id
}) => {
  const key = await (0, import_auth.getEnv)();
  try {
    const res = await fetch("https://redshield.vercel.app/api/service/login", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: key
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
        project_id
      })
    });
    const response = await res.json();
    if (response.status) {
      setJWTcookie({ token: response.token });
    }
    return {
      status: response.status || false,
      message: response.message || "something went wrong"
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong"
    };
  }
};
const setJWTcookie = ({ token }) => {
  const cookieStore = (0, import_headers.cookies)();
  const date = /* @__PURE__ */ new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1e3);
  cookieStore.set("_auth_token", token, {
    expires: date,
    httpOnly: true,
    sameSite: true
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LoginUser
});
//# sourceMappingURL=login.js.map