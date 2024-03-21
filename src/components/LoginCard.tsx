"use client";
import { LoginUser } from "../actions/login";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "./ui/card";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { sendResetPasswordLink } from "../actions/forgotPassword";

export default function LoginCard({ project_name, project_id }: { project_name: string, project_id: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  const router = useRouter();
  const sendData = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await fakeLoad();
    setLoading(true);
    const res = await LoginUser({ email: email, password: password, project_id: project_id });
    if (res.status) {
      toast.success(res.message);
      router.refresh();
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };
  return (
    <>
      {forgotPassword ? (
        <ForgotPasswordComponent setForgotPassword={setForgotPassword} />
      ) : (
        <Card className=" redshield-bg-white redshield-p-2 redshield-shadow-lg redshield-rounded-md redshield-border-[#EBEBEB]">
          <form action={sendData}>
            <CardHeader>
              <CardTitle>Login to {project_name}</CardTitle>
            </CardHeader>
            <CardContent className="redshield-flex redshield-flex-col redshield-gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                className="redshield-border-[#EBEBEB] redshield-rounded-sm"
                autoFocus
                placeholder="enter email"
                type="email"
                name="email"
                id="email"
                required
              />
              <Label htmlFor="password">Password</Label>
              <Input
                className="redshield-border-[#EBEBEB] redshield-rounded-sm"
                placeholder="enter password"
                type="password"
                name="password"
                id="password"
                required
              />
            </CardContent>
            <CardFooter className="redshield-flex-col redshield-gap-2 redshield-pb-2">
              <Button
                disabled={loading}
                className="redshield-w-full redshield-rounded-sm"
                type="submit"
              >
                {loading ? (
                  <Loader2 className="redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px] redshield-origin-center" />
                ) : (
                  "login"
                )}
              </Button>
              <Button onClick={() => setForgotPassword(true)} variant={"link"}>
                forgot password
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </>
  );
}

function ForgotPasswordComponent({
  setForgotPassword,
}: {
  setForgotPassword: Dispatch<SetStateAction<boolean>>;
}) {
  const [resetPassLoading, setResetPassLoading] = useState<boolean>(false);
  const resetPassRequest = async (formData: FormData) => {
    const email = formData.get("email") as string;
    //get current url for reset password endpoint
    const url = window.location.toString().split("/Auth")[0] as string;
    await fakeLoad();
    setResetPassLoading(true);
    const res = await sendResetPasswordLink({ email: email, url: url });
    if (res.status) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setResetPassLoading(false);
  };
  return (
    <form action={resetPassRequest}>
      <Card className="redshield-rounded-md">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent className="redshield-flex redshield-flex-col redshield-gap-5">
          <Label htmlFor="forgotPassEmail">Email</Label>
          <Input
            name="email"
            placeholder="enter your email address"
            required
            autoFocus
            className="redshield-rounded-sm"
            id="forgotPassEmail"
            type="email"
          />
        </CardContent>
        <CardFooter className="redshield-gap-3">
          <Button
            onClick={() => setForgotPassword(false)}
            variant={"outline"}
            className="redshield-w-full redshield-rounded-sm"
          >
            Back
          </Button>
          <Button className="redshield-rounded-sm redshield-w-full">
            {resetPassLoading ? (
              <Loader2 className="redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" />
            ) : (
              "Send link"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

const fakeLoad = async () => {
  return;
};
