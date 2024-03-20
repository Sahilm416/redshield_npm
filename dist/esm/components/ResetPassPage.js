import React from "react";
import ResetPassComponent from "./ResetPassComponent";
import { checkResetPasswordToken } from "../actions/forgotPassword";
async function ResetPassPage({ token }) {
  console.log(token);
  const tokenValidation = await checkResetPasswordToken({ token });
  return /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-[450px]" }, /* @__PURE__ */ React.createElement(ResetPassComponent, { data: tokenValidation }));
}
export {
  ResetPassPage as default
};
//# sourceMappingURL=ResetPassPage.js.map