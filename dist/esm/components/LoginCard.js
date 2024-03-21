"use client";
import { LoginUser } from "../actions/login";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { sendResetPasswordLink } from "../actions/forgotPassword";
function LoginCard({ project_name, project_id }) {
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const router = useRouter();
  const sendData = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    await fakeLoad();
    setLoading(true);
    const res = await LoginUser({ email, password, project_id });
    if (res.status) {
      toast.success(res.message);
      router.refresh();
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, forgotPassword ? /* @__PURE__ */ React.createElement(ForgotPasswordComponent, { setForgotPassword }) : /* @__PURE__ */ React.createElement(Card, { className: " redshield-bg-white dark:redshield-bg-black dark:redshield-text-white redshield-p-2 redshield-shadow-lg redshield-rounded-md redshield-border-[#EBEBEB]" }, /* @__PURE__ */ React.createElement("form", { action: sendData }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Login to ", project_name)), /* @__PURE__ */ React.createElement(CardContent, { className: "redshield-flex redshield-flex-col redshield-gap-3" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "email" }, "Email"), /* @__PURE__ */ React.createElement(
    Input,
    {
      className: "redshield-border-[#EBEBEB] redshield-rounded-sm",
      autoFocus: true,
      placeholder: "enter email",
      type: "email",
      name: "email",
      id: "email",
      required: true
    }
  ), /* @__PURE__ */ React.createElement(Label, { htmlFor: "password" }, "Password"), /* @__PURE__ */ React.createElement(
    Input,
    {
      className: "redshield-border-[#EBEBEB] redshield-rounded-sm",
      placeholder: "enter password",
      type: "password",
      name: "password",
      id: "password",
      required: true
    }
  )), /* @__PURE__ */ React.createElement(CardFooter, { className: "redshield-flex-col redshield-gap-2 redshield-pb-2" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      disabled: loading,
      className: "redshield-w-full redshield-rounded-sm",
      type: "submit"
    },
    loading ? /* @__PURE__ */ React.createElement(Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px] redshield-origin-center" }) : "login"
  ), /* @__PURE__ */ React.createElement(Button, { onClick: () => setForgotPassword(true), variant: "link" }, "forgot password")))));
}
function ForgotPasswordComponent({
  setForgotPassword
}) {
  const [resetPassLoading, setResetPassLoading] = useState(false);
  const resetPassRequest = async (formData) => {
    const email = formData.get("email");
    const url = window.location.toString().split("/Auth")[0];
    await fakeLoad();
    setResetPassLoading(true);
    const res = await sendResetPasswordLink({ email, url });
    if (res.status) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setResetPassLoading(false);
  };
  return /* @__PURE__ */ React.createElement("form", { action: resetPassRequest }, /* @__PURE__ */ React.createElement(Card, { className: "redshield-rounded-md" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Reset Password")), /* @__PURE__ */ React.createElement(CardContent, { className: "redshield-flex redshield-flex-col redshield-gap-5" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "forgotPassEmail" }, "Email"), /* @__PURE__ */ React.createElement(
    Input,
    {
      name: "email",
      placeholder: "enter your email address",
      required: true,
      autoFocus: true,
      className: "redshield-rounded-sm",
      id: "forgotPassEmail",
      type: "email"
    }
  )), /* @__PURE__ */ React.createElement(CardFooter, { className: "redshield-gap-3" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => setForgotPassword(false),
      variant: "outline",
      className: "redshield-w-full redshield-rounded-sm"
    },
    "Back"
  ), /* @__PURE__ */ React.createElement(Button, { className: "redshield-rounded-sm redshield-w-full" }, resetPassLoading ? /* @__PURE__ */ React.createElement(Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "Send link"))));
}
const fakeLoad = async () => {
  return;
};
export {
  LoginCard as default
};
//# sourceMappingURL=LoginCard.js.map