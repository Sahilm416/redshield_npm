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
var auth_exports = {};
__export(auth_exports, {
  LogOut: () => LogOut,
  getEnv: () => getEnv,
  getProject: () => getProject,
  getSession: () => getSession,
  resetPassword: () => resetPassword,
  verifyJWT: () => verifyJWT
});
module.exports = __toCommonJS(auth_exports);
var import_headers = require("next/headers");
const getEnv = async () => {
  return process.env.Red_key;
};
const getProject = async () => {
  try {
    const key = await getEnv();
    const jwt_secret = process.env.JWT_SECRET;
    if (!key) {
      throw new Error("No api key specified");
    }
    if (!jwt_secret) {
      throw new Error("No jwt secret specified");
    }
    const res = await fetch(
      "https://redshield.vercel.app/api/service/getProject",
      {
        cache: "no-store",
        headers: {
          Authorization: key
        }
      }
    );
    const response = await res.json();
    if (response.status) {
      return {
        status: true,
        message: response.message,
        project_name: response.project_name,
        project_id: response.project_id
      };
    }
    return {
      status: false,
      message: response.message,
      project_id: "",
      project_name: ""
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong",
      project_id: "",
      project_name: ""
    };
  }
};
const verifyJWT = async ({ token }) => {
  try {
    const key = await getEnv();
    const jwt_secret = process.env.JWT_SECRET;
    const res = await fetch("https://redshield.vercel.app/api/service/verify", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: key
      },
      body: JSON.stringify({
        token,
        jwt_secret
      })
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong"
    };
  }
};
const getSession = async () => {
  const store = (0, import_headers.cookies)();
  const token = store.get("_auth_token")?.value;
  if (!token) {
    return {
      status: false,
      message: "session token not found"
    };
  }
  try {
    const res = await verifyJWT({ token });
    return {
      status: res.status,
      message: res.message,
      data: res.data
    };
  } catch (error) {
    console.log("error verifying token: " + error);
    return {
      status: false,
      message: "token signature invalid"
    };
  }
};
const LogOut = async () => {
  const store = (0, import_headers.cookies)();
  store.delete("_auth_token");
  return {
    status: true,
    message: "logged out successfully"
  };
};
const resetPassword = async () => {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LogOut,
  getEnv,
  getProject,
  getSession,
  resetPassword,
  verifyJWT
});
//# sourceMappingURL=auth.js.map