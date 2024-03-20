"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var LoginCard_exports = {};
__export(LoginCard_exports, {
  default: () => LoginCard
});
module.exports = __toCommonJS(LoginCard_exports);
var import_login = require("../actions/login");
var import_button = require("./ui/button");
var import_card = require("./ui/card");
var import_input = require("./ui/input");
var import_label = require("./ui/label");
var import_react = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
var import_sonner = require("sonner");
var import_navigation = require("next/navigation");
var import_forgotPassword = require("../actions/forgotPassword");
function LoginCard({ project_name, project_id }) {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [forgotPassword, setForgotPassword] = (0, import_react.useState)(false);
  const router = (0, import_navigation.useRouter)();
  const sendData = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    await fakeLoad();
    setLoading(true);
    const res = await (0, import_login.LoginUser)({ email, password, project_id });
    if (res.status) {
      import_sonner.toast.success(res.message);
      router.refresh();
    } else {
      import_sonner.toast.error(res.message);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, forgotPassword ? /* @__PURE__ */ import_react.default.createElement(ForgotPasswordComponent, { setForgotPassword }) : /* @__PURE__ */ import_react.default.createElement(import_card.Card, { className: " dark:bg-gray-900/20 bg-white p-2 shadow-lg rounded-md border-[#EBEBEB] dark:border-[#1F1F1F]" }, /* @__PURE__ */ import_react.default.createElement("form", { action: sendData }, /* @__PURE__ */ import_react.default.createElement(import_card.CardHeader, null, /* @__PURE__ */ import_react.default.createElement(import_card.CardTitle, null, "Login to ", project_name)), /* @__PURE__ */ import_react.default.createElement(import_card.CardContent, { className: "flex flex-col gap-3" }, /* @__PURE__ */ import_react.default.createElement(import_label.Label, { htmlFor: "email" }, "Email"), /* @__PURE__ */ import_react.default.createElement(
    import_input.Input,
    {
      className: "border-[#EBEBEB] dark:border-[#1F1F1F] rounded-sm",
      autoFocus: true,
      placeholder: "enter email",
      type: "email",
      name: "email",
      id: "email",
      required: true
    }
  ), /* @__PURE__ */ import_react.default.createElement(import_label.Label, { htmlFor: "password" }, "Password"), /* @__PURE__ */ import_react.default.createElement(
    import_input.Input,
    {
      className: "border-[#EBEBEB] dark:border-[#1F1F1F] rounded-sm",
      placeholder: "enter password",
      type: "password",
      name: "password",
      id: "password",
      required: true
    }
  )), /* @__PURE__ */ import_react.default.createElement(import_card.CardFooter, { className: "flex-col gap-2 pb-2" }, /* @__PURE__ */ import_react.default.createElement(
    import_button.Button,
    {
      disabled: loading,
      className: "w-full rounded-sm",
      type: "submit"
    },
    loading ? /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Loader2, { className: "animate-[spin_0.4s_linear_infinite] w-[27px] h-[27px] origin-center " }) : "login"
  ), /* @__PURE__ */ import_react.default.createElement(import_button.Button, { onClick: () => setForgotPassword(true), variant: "link" }, "forgot password")))));
}
function ForgotPasswordComponent({
  setForgotPassword
}) {
  const [resetPassLoading, setResetPassLoading] = (0, import_react.useState)(false);
  const resetPassRequest = async (formData) => {
    const email = formData.get("email");
    const url = window.location.toString().split("/Auth")[0];
    await fakeLoad();
    setResetPassLoading(true);
    const res = await (0, import_forgotPassword.sendResetPasswordLink)({ email, url });
    if (res.status) {
      import_sonner.toast.success(res.message);
    } else {
      import_sonner.toast.error(res.message);
    }
    setResetPassLoading(false);
  };
  return /* @__PURE__ */ import_react.default.createElement("form", { action: resetPassRequest }, /* @__PURE__ */ import_react.default.createElement(import_card.Card, { className: " rounded-md" }, /* @__PURE__ */ import_react.default.createElement(import_card.CardHeader, null, /* @__PURE__ */ import_react.default.createElement(import_card.CardTitle, null, "Reset Password")), /* @__PURE__ */ import_react.default.createElement(import_card.CardContent, { className: "flex flex-col gap-5" }, /* @__PURE__ */ import_react.default.createElement(import_label.Label, { htmlFor: "forgotPassEmail" }, "Email"), /* @__PURE__ */ import_react.default.createElement(
    import_input.Input,
    {
      name: "email",
      placeholder: "enter your email address",
      required: true,
      autoFocus: true,
      className: " rounded-sm",
      id: "forgotPassEmail",
      type: "email"
    }
  )), /* @__PURE__ */ import_react.default.createElement(import_card.CardFooter, { className: "gap-3" }, /* @__PURE__ */ import_react.default.createElement(
    import_button.Button,
    {
      onClick: () => setForgotPassword(false),
      variant: "outline",
      className: "w-full rounded-sm"
    },
    "Back"
  ), /* @__PURE__ */ import_react.default.createElement(import_button.Button, { className: " rounded-sm w-full" }, resetPassLoading ? /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Loader2, { className: "animate-[spin_0.4s_linear_infinite] w-[27px] h-[27px]" }) : "Send link"))));
}
const fakeLoad = async () => {
  return;
};
//# sourceMappingURL=LoginCard.js.map