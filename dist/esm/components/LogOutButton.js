"use client";
import React from "react";
import { LogOut } from "../actions/auth";
function LogOutButton({ className }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "button",
    {
      className,
      onClick: async () => {
        await LogOut();
        return window.location.reload();
      }
    },
    "logout"
  ));
}
export {
  LogOutButton as default
};
//# sourceMappingURL=LogOutButton.js.map