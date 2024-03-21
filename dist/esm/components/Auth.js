import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";
import React from "react";
import { Toaster } from "sonner";
import { getProject } from "../actions/auth";
async function AuthPage() {
  const project = await getProject();
  if (!project.status) {
    return /* @__PURE__ */ React.createElement("div", { className: "redshield-w-full redshield-h-screen redshield-absolute redshield-top-0 redshield-right-0 redshield-bg-black/95 redshield-overflow-hidden redshield-z-50 redshield-flex redshield-text-center redshield-justify-center redshield-items-center" }, /* @__PURE__ */ React.createElement("div", { className: "redshield-w-full redshield-max-w-[400px] redshield-p-5 redshield-border redshield-border-red-600 redshield-bg-black redshield-text-red-600" }, "Error loading AUTH UI ", /* @__PURE__ */ React.createElement("br", null), project.message));
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Tabs, { className: "redshield-w-[90vw] redshield-max-w-[400px]", defaultValue: "login" }, /* @__PURE__ */ React.createElement(TabsList, { className: "redshield-grid bg-slate-900 redshield-w-full redshield-grid-cols-2 redshield-rounded-md" }, /* @__PURE__ */ React.createElement(TabsTrigger, { className: "redshield-rounded-none", value: "login" }, "Login"), /* @__PURE__ */ React.createElement(TabsTrigger, { className: "redshield-rounded-dm", value: "register" }, "Register")), /* @__PURE__ */ React.createElement(TabsContent, { value: "login" }, /* @__PURE__ */ React.createElement(
    LoginCard,
    {
      project_name: project.project_name,
      project_id: project.project_id
    }
  )), /* @__PURE__ */ React.createElement(TabsContent, { value: "register" }, /* @__PURE__ */ React.createElement(
    RegisterCard,
    {
      project_name: project.project_name,
      project_id: project.project_id
    }
  ))), /* @__PURE__ */ React.createElement(Toaster, { richColors: true, position: "bottom-right" }));
}
export {
  AuthPage as default
};
//# sourceMappingURL=Auth.js.map