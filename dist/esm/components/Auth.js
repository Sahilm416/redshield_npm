import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";
import React from "react";
import { Toaster } from "sonner";
import { getProject } from "../actions/auth";
async function AuthPage() {
  const project = await getProject();
  if (!project.status) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full h-screen absolute top-0 right-0 bg-black/95 overflow-hidden z-50 flex text-center justify-center items-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-[400px] p-5 border border-red-600 bg-black text-red-600" }, "Error loading AUTH UI ", /* @__PURE__ */ React.createElement("br", null), project.message));
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Tabs, { className: " w-[90vw] max-w-[400px]", defaultValue: "login" }, /* @__PURE__ */ React.createElement(TabsList, { className: "grid dark:bg-slate-900 w-full grid-cols-2 rounded-md" }, /* @__PURE__ */ React.createElement(TabsTrigger, { className: " rounded-none", value: "login" }, "Login"), /* @__PURE__ */ React.createElement(TabsTrigger, { className: " rounded-dm", value: "register" }, "Register")), /* @__PURE__ */ React.createElement(TabsContent, { value: "login" }, /* @__PURE__ */ React.createElement(
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