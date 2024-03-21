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
var additional_exports = {};
__export(additional_exports, {
  login: () => login,
  logout: () => logout,
  register: () => register,
  sendEmailVerificationCode: () => sendEmailVerificationCode,
  verifyVerificationCode: () => verifyVerificationCode
});
module.exports = __toCommonJS(additional_exports);
var import_login = require("../actions/login");
var import_register = require("../actions/register");
var import_auth = require("../actions/auth");
const login = async ({ email, password }) => {
  const { project_id } = await (0, import_auth.getProject)();
  const res = await (0, import_login.LoginUser)({
    email,
    password,
    project_id
  });
  return res;
};
const sendEmailVerificationCode = async ({
  email
}) => {
  const res = await (0, import_register.sendCode)({ email });
  return res;
};
const verifyVerificationCode = async ({
  email,
  code
}) => {
  const res = await (0, import_register.verifyCode)({ email, code });
  return res;
};
const register = async ({ email, password }) => {
  const { project_id } = await (0, import_auth.getProject)();
  const res = await (0, import_register.registerUser)({
    email,
    password,
    project_id
  });
  return res;
};
const logout = async () => {
  await (0, import_auth.LogOut)();
  return;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  login,
  logout,
  register,
  sendEmailVerificationCode,
  verifyVerificationCode
});
//# sourceMappingURL=additional.js.map