"use strict";
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
var src_exports = {};
__export(src_exports, {
  changePassword: () => import_additional.changePassword,
  checkToken: () => import_additional.checkToken,
  getSession: () => import_auth.getSession,
  login: () => import_additional.login,
  logout: () => import_additional.logout,
  register: () => import_additional.register,
  resetPassword: () => import_additional.resetPassword,
  sendEmailVerificationCode: () => import_additional.sendEmailVerificationCode,
  verifyVerificationCode: () => import_additional.verifyVerificationCode
});
module.exports = __toCommonJS(src_exports);
var import_auth = require("./actions/auth");
var import_additional = require("./methods/additional");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  changePassword,
  checkToken,
  getSession,
  login,
  logout,
  register,
  resetPassword,
  sendEmailVerificationCode,
  verifyVerificationCode
});
//# sourceMappingURL=index.js.map