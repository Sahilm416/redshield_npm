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
var check_exports = {};
__export(check_exports, {
  checkPassword: () => checkPassword
});
module.exports = __toCommonJS(check_exports);
const checkPassword = async (data) => {
  if (!/(?=.*[!@#$%^&*])/.test(data.password)) {
    return { status: false, message: "must contain one special character" };
  }
  if (!/(?=.*[0-9])/.test(data.password)) {
    return {
      status: false,
      message: "Password must contain at least one number."
    };
  }
  if (data.password.trim().length < 8) {
    return {
      status: false,
      message: "Password must be at least 8 characters long."
    };
  }
  if (data.password.trim().length > 20) {
    return { status: false, message: "too long password" };
  }
  return { status: true, message: "Valid password" };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkPassword
});
//# sourceMappingURL=check.js.map