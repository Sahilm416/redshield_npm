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
var RegisterCard_exports = {};
__export(RegisterCard_exports, {
  default: () => RegisterCard
});
module.exports = __toCommonJS(RegisterCard_exports);
var import_button = require("./ui/button");
var import_card = require("./ui/card");
var import_input = require("./ui/input");
var import_label = require("./ui/label");
var import_lucide_react = require("lucide-react");
var import_react = __toESM(require("react"));
var import_register = require("../actions/register");
var import_check = require("../actions/check");
var import_sonner = require("sonner");
var import_navigation = require("next/navigation");
function RegisterCard({
  project_name,
  project_id
}) {
  const [formCount, setFormCount] = (0, import_react.useState)(1);
  const [email, setEmail] = (0, import_react.useState)("");
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_card.Card, { className: "bg-gray-900/20 redshield-bg-white redshield-px-2 redshield-h-auto redshield-shadow-lg redshield-rounded-none" }, /* @__PURE__ */ import_react.default.createElement(import_card.CardHeader, null, /* @__PURE__ */ import_react.default.createElement(import_card.CardTitle, null, "Register to ", project_name), /* @__PURE__ */ import_react.default.createElement(import_card.CardDescription, null, "redis based auth")), formCount === 1 ? /* @__PURE__ */ import_react.default.createElement(Form1, { setFormCount, setEmail }) : formCount === 2 ? /* @__PURE__ */ import_react.default.createElement(Form2, { setFormCount, email }) : /* @__PURE__ */ import_react.default.createElement(Form3, { email, project_id })));
}
const Form1 = ({
  setFormCount,
  setEmail
}) => {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const sendData = async (formData) => {
    const mail = formData.get("email");
    await fakeLoad();
    setLoading(true);
    const res = await (0, import_register.sendCode)({ email: mail });
    if (res.status) {
      import_sonner.toast.success(res.message);
      setEmail(mail);
      setFormCount(2);
    } else {
      import_sonner.toast.error(res.message);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("form", { action: sendData }, /* @__PURE__ */ import_react.default.createElement(import_card.CardContent, null, /* @__PURE__ */ import_react.default.createElement(import_label.Label, { htmlFor: "email" }, "Email"), /* @__PURE__ */ import_react.default.createElement(
    import_input.Input,
    {
      className: "redshield-rounded-none",
      required: true,
      id: "email",
      name: "email",
      type: "email",
      placeholder: "enter your email"
    }
  )), /* @__PURE__ */ import_react.default.createElement(import_card.CardFooter, null, /* @__PURE__ */ import_react.default.createElement(
    import_button.Button,
    {
      disabled: loading,
      type: "submit",
      className: "redshield-w-full redshield-rounded-none"
    },
    loading ? /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "continue"
  ))));
};
const Form2 = ({
  setFormCount,
  email
}) => {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const sendData = async (formData) => {
    const code = formData.get("code");
    await fakeLoad();
    setLoading(true);
    const res = await (0, import_register.verifyCode)({ code, email });
    if (res.status) {
      import_sonner.toast.success(res.message);
      setFormCount(3);
    } else {
      import_sonner.toast.error(res.message);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("form", { action: sendData }, /* @__PURE__ */ import_react.default.createElement(import_card.CardContent, { className: "redshield-flex redshield-flex-col redshield-gap-3" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "redshield-text-sm redshield-text-slate-400 text-slate-500" }, "enter the code sent to ", /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("span", { className: "redshield-text-slate-700 text-slate-300" }, email), " "), /* @__PURE__ */ import_react.default.createElement(
    import_input.Input,
    {
      className: "redshield-rounded-none",
      name: "code",
      type: "text",
      required: true,
      placeholder: "enter code"
    }
  )), /* @__PURE__ */ import_react.default.createElement(import_card.CardFooter, { className: "redshield-flex redshield-gap-3" }, /* @__PURE__ */ import_react.default.createElement(
    import_button.Button,
    {
      onClick: () => setFormCount(1),
      type: "button",
      className: "redshield-w-[50%] redshield-rounded-none",
      variant: "outline"
    },
    "back"
  ), /* @__PURE__ */ import_react.default.createElement(
    import_button.Button,
    {
      disabled: loading,
      type: "submit",
      className: "redshield-w-[50%] redshield-rounded-none"
    },
    loading ? /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "submit"
  ))));
};
const Form3 = ({
  email,
  project_id
}) => {
  const [loading, setLoading] = (0, import_react.useState)(false);
  const router = (0, import_navigation.useRouter)();
  const createUser = async (formData) => {
    const pass = formData.get("pass");
    const confirmPass = formData.get("confirm");
    if (pass === confirmPass) {
      const validation = await (0, import_check.checkPassword)({ password: pass });
      if (validation.status) {
        setLoading(true);
        const res = await (0, import_register.registerUser)({
          email,
          password: pass,
          project_id
        });
        if (res.status) {
          import_sonner.toast.success(res.message);
          router.push("/");
        } else {
          import_sonner.toast.error(res.message);
        }
        setLoading(false);
      } else {
        import_sonner.toast.error(validation.message);
      }
    } else {
      import_sonner.toast.error("password does not match");
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("form", { action: createUser }, /* @__PURE__ */ import_react.default.createElement(import_card.CardContent, { className: "redshield-flex redshield-flex-col redshield-gap-3" }, /* @__PURE__ */ import_react.default.createElement(import_label.Label, { htmlFor: "pass" }, "Password"), /* @__PURE__ */ import_react.default.createElement(
    import_input.Input,
    {
      className: "redshield-rounded-none",
      name: "pass",
      id: "pass",
      type: "password"
    }
  ), /* @__PURE__ */ import_react.default.createElement(import_label.Label, { htmlFor: "confirm" }, "Confirm Password"), /* @__PURE__ */ import_react.default.createElement(
    import_input.Input,
    {
      className: "redshield-rounded-none",
      name: "confirm",
      id: "confirm",
      type: "password"
    }
  )), /* @__PURE__ */ import_react.default.createElement(import_card.CardFooter, null, /* @__PURE__ */ import_react.default.createElement(
    import_button.Button,
    {
      disabled: loading,
      type: "submit",
      className: "redshield-w-full redshield-rounded-none"
    },
    loading ? /* @__PURE__ */ import_react.default.createElement(import_lucide_react.Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "create account"
  ))));
};
const fakeLoad = async () => {
  return;
};
//# sourceMappingURL=RegisterCard.js.map