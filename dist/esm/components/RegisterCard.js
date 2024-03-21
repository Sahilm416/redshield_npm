"use client";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { registerUser, sendCode, verifyCode } from "../actions/register";
import { checkPassword } from "../actions/check";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
function RegisterCard({
  project_name,
  project_id
}) {
  const [formCount, setFormCount] = useState(1);
  const [email, setEmail] = useState("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Card, { className: "redshield-dark:bg-gray-900/20 redshield-bg-white redshield-px-2 redshield-h-auto redshield-shadow-lg redshield-rounded-none" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Register to ", project_name), /* @__PURE__ */ React.createElement(CardDescription, null, "redis based auth")), formCount === 1 ? /* @__PURE__ */ React.createElement(Form1, { setFormCount, setEmail }) : formCount === 2 ? /* @__PURE__ */ React.createElement(Form2, { setFormCount, email }) : /* @__PURE__ */ React.createElement(Form3, { email, project_id })));
}
const Form1 = ({
  setFormCount,
  setEmail
}) => {
  const [loading, setLoading] = useState(false);
  const sendData = async (formData) => {
    const mail = formData.get("email");
    await fakeLoad();
    setLoading(true);
    const res = await sendCode({ email: mail });
    if (res.status) {
      toast.success(res.message);
      setEmail(mail);
      setFormCount(2);
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { action: sendData }, /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Label, { htmlFor: "email" }, "Email"), /* @__PURE__ */ React.createElement(
    Input,
    {
      className: "redshield-rounded-none",
      required: true,
      id: "email",
      name: "email",
      type: "email",
      placeholder: "enter your email"
    }
  )), /* @__PURE__ */ React.createElement(CardFooter, null, /* @__PURE__ */ React.createElement(
    Button,
    {
      disabled: loading,
      type: "submit",
      className: "redshield-w-full redshield-rounded-none"
    },
    loading ? /* @__PURE__ */ React.createElement(Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "continue"
  ))));
};
const Form2 = ({
  setFormCount,
  email
}) => {
  const [loading, setLoading] = useState(false);
  const sendData = async (formData) => {
    const code = formData.get("code");
    await fakeLoad();
    setLoading(true);
    const res = await verifyCode({ code, email });
    if (res.status) {
      toast.success(res.message);
      setFormCount(3);
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { action: sendData }, /* @__PURE__ */ React.createElement(CardContent, { className: "redshield-flex redshield-flex-col redshield-gap-3" }, /* @__PURE__ */ React.createElement("p", { className: "redshield-text-sm redshield-text-slate-400 redshield-dark:text-slate-500" }, "enter the code sent to ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "redshield-text-slate-700 redshield-dark:text-slate-300" }, email), " "), /* @__PURE__ */ React.createElement(
    Input,
    {
      className: "redshield-rounded-none",
      name: "code",
      type: "text",
      required: true,
      placeholder: "enter code"
    }
  )), /* @__PURE__ */ React.createElement(CardFooter, { className: "redshield-flex redshield-gap-3" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => setFormCount(1),
      type: "button",
      className: "redshield-w-[50%] redshield-rounded-none",
      variant: "outline"
    },
    "back"
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      disabled: loading,
      type: "submit",
      className: "redshield-w-[50%] redshield-rounded-none"
    },
    loading ? /* @__PURE__ */ React.createElement(Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "submit"
  ))));
};
const Form3 = ({
  email,
  project_id
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const createUser = async (formData) => {
    const pass = formData.get("pass");
    const confirmPass = formData.get("confirm");
    if (pass === confirmPass) {
      const validation = await checkPassword({ password: pass });
      if (validation.status) {
        setLoading(true);
        const res = await registerUser({
          email,
          password: pass,
          project_id
        });
        if (res.status) {
          toast.success(res.message);
          router.push("/");
        } else {
          toast.error(res.message);
        }
        setLoading(false);
      } else {
        toast.error(validation.message);
      }
    } else {
      toast.error("password does not match");
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", { action: createUser }, /* @__PURE__ */ React.createElement(CardContent, { className: "redshield-flex redshield-flex-col redshield-gap-3" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "pass" }, "Password"), /* @__PURE__ */ React.createElement(
    Input,
    {
      className: "redshield-rounded-none",
      name: "pass",
      id: "pass",
      type: "password"
    }
  ), /* @__PURE__ */ React.createElement(Label, { htmlFor: "confirm" }, "Confirm Password"), /* @__PURE__ */ React.createElement(
    Input,
    {
      className: "redshield-rounded-none",
      name: "confirm",
      id: "confirm",
      type: "password"
    }
  )), /* @__PURE__ */ React.createElement(CardFooter, null, /* @__PURE__ */ React.createElement(
    Button,
    {
      disabled: loading,
      type: "submit",
      className: "redshield-w-full redshield-rounded-none"
    },
    loading ? /* @__PURE__ */ React.createElement(Loader2, { className: "redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" }) : "create account"
  ))));
};
const fakeLoad = async () => {
  return;
};
export {
  RegisterCard as default
};
//# sourceMappingURL=RegisterCard.js.map