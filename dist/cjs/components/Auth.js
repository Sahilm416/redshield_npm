"use strict";
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
var Auth_exports = {};
__export(Auth_exports, {
  default: () => AuthPage
});
module.exports = __toCommonJS(Auth_exports);
var import_tabs = require("./ui/tabs");
var import_LoginCard = __toESM(require("./LoginCard"));
var import_RegisterCard = __toESM(require("./RegisterCard"));
var import_react = __toESM(require("react"));
var import_sonner = require("sonner");
var import_auth = require("../actions/auth");
async function AuthPage() {
  const project = await (0, import_auth.getProject)();
  if (!project.status) {
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "redshield-w-full redshield-h-screen redshield-absolute redshield-top-0 redshield-right-0 redshield-bg-black/95 redshield-overflow-hidden redshield-z-50 redshield-flex redshield-text-center redshield-justify-center redshield-items-center" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "redshield-w-full redshield-max-w-[400px] redshield-p-5 redshield-border redshield-border-red-600 redshield-bg-black redshield-text-red-600" }, "Error loading AUTH UI ", /* @__PURE__ */ import_react.default.createElement("br", null), project.message));
  }
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(import_tabs.Tabs, { className: "redshield-w-[90vw] redshield-max-w-[400px]", defaultValue: "login" }, /* @__PURE__ */ import_react.default.createElement(import_tabs.TabsList, { className: "redshield-grid redshield-bg-slate-900 redshield-w-full redshield-grid-cols-2 redshield-rounded-md" }, /* @__PURE__ */ import_react.default.createElement(import_tabs.TabsTrigger, { className: "redshield-rounded-md", value: "login" }, "Login"), /* @__PURE__ */ import_react.default.createElement(import_tabs.TabsTrigger, { className: "redshield-rounded-md", value: "register" }, "Register")), /* @__PURE__ */ import_react.default.createElement(import_tabs.TabsContent, { value: "login" }, /* @__PURE__ */ import_react.default.createElement(
    import_LoginCard.default,
    {
      project_name: project.project_name,
      project_id: project.project_id
    }
  )), /* @__PURE__ */ import_react.default.createElement(import_tabs.TabsContent, { value: "register" }, /* @__PURE__ */ import_react.default.createElement(
    import_RegisterCard.default,
    {
      project_name: project.project_name,
      project_id: project.project_id
    }
  ))), /* @__PURE__ */ import_react.default.createElement(import_sonner.Toaster, { richColors: true, position: "bottom-right" }));
}
//# sourceMappingURL=Auth.js.map