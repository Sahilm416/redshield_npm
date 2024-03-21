import React from "react";
import ResetPassComponent from "./ResetPassComponent";
import { checkResetPasswordToken } from "../actions/forgotPassword";
async function ResetPassPage({ token }) {
  const tokenValidation = await checkResetPasswordToken({ token });
  return /* @__PURE__ */ React.createElement("div", { className: "redshield-w-full redshield-max-w-[450px]" }, /* @__PURE__ */ React.createElement(ResetPassComponent, { data: tokenValidation }));
}
export {
  ResetPassPage as default
};
//# sourceMappingURL=ResetPassPage.js.map