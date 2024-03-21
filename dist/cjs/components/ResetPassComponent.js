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
var ResetPassComponent_exports = {};
__export(ResetPassComponent_exports, {
  default: () => ResetPassComponent
});
module.exports = __toCommonJS(ResetPassComponent_exports);
var import_card = require("./ui/card");
var import_label = require("./ui/label");
var import_input = require("./ui/input");
var import_button = require("./ui/button");
var import_check = require("../actions/check");
var import_sonner = require("sonner");
var import_react = require("react");
var import_navigation = require("next/navigation");
var import_react2 = __toESM(require("react"));
var import_forgotPassword = require("../actions/forgotPassword");
var import_lucide_react = require("lucide-react");
function ResetPassComponent({ data }) {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, data.status ? /* @__PURE__ */ import_react2.default.createElement(ResetPass, { data }) : /* @__PURE__ */ import_react2.default.createElement(InvalidLink, null), " ", /* @__PURE__ */ import_react2.default.createElement(import_sonner.Toaster, { richColors: true, position: "bottom-right" }));
}
const ResetPass = ({ data }) => {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const router = (0, import_navigation.useRouter)();
  const sendData = async (formData) => {
    const password = formData.get("reset_pass");
    const confirm_password = formData.get("confirm_reset_pass");
    if (password.trim() === confirm_password.trim()) {
      const checkInputPassword = await (0, import_check.checkPassword)({ password });
      if (checkInputPassword.status) {
        await fakeLoad();
        setLoading(true);
        const res = await (0, import_forgotPassword.changePassword)({
          password,
          email: data.email,
          token: data.token
        });
        if (res.status) {
          import_sonner.toast.success(res.message);
          router.refresh();
          router.push("/Auth");
        } else {
          import_sonner.toast.error(res.message);
        }
      } else {
        import_sonner.toast.error(checkInputPassword.message);
      }
    } else {
      import_sonner.toast.error("password did not match");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("form", { action: sendData }, /* @__PURE__ */ import_react2.default.createElement(import_card.Card, { className: "redshield-w-[90vw] redshield-max-w-[450px] redshield-shadow-lg redshield-rounded-none redshield-bg-white bg-gray-900/20" }, /* @__PURE__ */ import_react2.default.createElement(import_card.CardHeader, null, /* @__PURE__ */ import_react2.default.createElement(import_card.CardTitle, null, "Change Password")), /* @__PURE__ */ import_react2.default.createElement(import_card.CardContent, { className: "redshield-flex redshield-flex-col redshield-gap-4" }, /* @__PURE__ */ import_react2.default.createElement(import_label.Label, { htmlFor: "resetpass" }, "New password"), /* @__PURE__ */ import_react2.default.createElement(
    import_input.Input,
    {
      required: true,
      name: "reset_pass",
      id: "resetpass",
      type: "password",
      className: "redshield-rounded-none"
    }
  ), /* @__PURE__ */ import_react2.default.createElement(import_label.Label, { htmlFor: "confirmresetpass" }, "Confirm Password"), /* @__PURE__ */ import_react2.default.createElement(
    import_input.Input,
    {
      required: true,
      name: "confirm_reset_pass",
      id: "confirmresetpass",
      type: "password",
      className: "redshield-rounded-none"
    }
  )), /* @__PURE__ */ import_react2.default.createElement(import_card.CardFooter, { className: "redshield-justify-end" }, /* @__PURE__ */ import_react2.default.createElement(
    import_button.Button,
    {
      disabled: loading,
      type: "submit",
      className: "redshield-w-[150px] redshield-rounded-none"
    },
    loading ? /* @__PURE__ */ import_react2.default.createElement(import_lucide_react.Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "Save"
  )))));
};
const InvalidLink = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", { className: "redshield-w-full redshield-h-screen redshield-flex redshield-justify-center redshield-items-center" }, /* @__PURE__ */ import_react2.default.createElement("p", null, "Invalid link"));
};
const fakeLoad = async () => {
  return;
};
//# sourceMappingURL=ResetPassComponent.js.map