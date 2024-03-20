"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { checkPassword } from "../actions/check";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { changePassword } from "../actions/forgotPassword";
import { Loader2 } from "lucide-react";
function ResetPassComponent({ data }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, data.status ? /* @__PURE__ */ React.createElement(ResetPass, { data }) : /* @__PURE__ */ React.createElement(InvalidLink, null), " ", /* @__PURE__ */ React.createElement(Toaster, { richColors: true, position: "bottom-right" }));
}
const ResetPass = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const sendData = async (formData) => {
    const password = formData.get("reset_pass");
    const confirm_password = formData.get("confirm_reset_pass");
    if (password.trim() === confirm_password.trim()) {
      const checkInputPassword = await checkPassword({ password });
      if (checkInputPassword.status) {
        await fakeLoad();
        setLoading(true);
        const res = await changePassword({
          password,
          email: data.email,
          token: data.token
        });
        if (res.status) {
          toast.success(res.message);
          router.refresh();
          router.push("/Auth");
        } else {
          toast.error(res.message);
        }
      } else {
        toast.error(checkInputPassword.message);
      }
    } else {
      toast.error("password did not match");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { action: sendData }, /* @__PURE__ */ React.createElement(Card, { className: "w-[90vw] max-w-[450px] shadow-lg rounded-none bg-white dark:bg-gray-900/20" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Change Password")), /* @__PURE__ */ React.createElement(CardContent, { className: "flex flex-col gap-4" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "resetpass" }, "New password"), /* @__PURE__ */ React.createElement(
    Input,
    {
      required: true,
      name: "reset_pass",
      id: "resetpass",
      type: "password",
      className: " rounded-none"
    }
  ), /* @__PURE__ */ React.createElement(Label, { htmlFor: "confirmresetpass" }, "Confirm Password"), /* @__PURE__ */ React.createElement(
    Input,
    {
      required: true,
      name: "confirm_reset_pass",
      id: "confirmresetpass",
      type: "password",
      className: " rounded-none"
    }
  )), /* @__PURE__ */ React.createElement(CardFooter, { className: " justify-end" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      disabled: loading,
      type: "submit",
      className: " w-[150px] rounded-none"
    },
    loading ? /* @__PURE__ */ React.createElement(Loader2, { className: "animate-[spin_0.4s_linear_infinite] w-[27px] h-[27px]" }) : "Save"
  )))));
};
const InvalidLink = () => {
  return /* @__PURE__ */ React.createElement("div", { className: "w-full h-screen flex justify-center items-center" }, /* @__PURE__ */ React.createElement("p", null, "Invalid link"));
};
const fakeLoad = async () => {
  return;
};
export {
  ResetPassComponent as default
};
//# sourceMappingURL=ResetPassComponent.js.map