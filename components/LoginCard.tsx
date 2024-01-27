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
import { Oval } from "react-loader-spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginCard({ project_name }: { project_name: string }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);


  const router = useRouter();
  const sendData = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await fakeLoad();
    setLoading(true);
    const res = await LoginUser({ email: email, password: password });
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
        <Card className=" dark:bg-gray-900/20 bg-white p-2 shadow-lg rounded-none border-[#EBEBEB] dark:border-[#1F1F1F]">
          <form action={sendData}>
            <CardHeader>
              <CardTitle>Login to {project_name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                className="border-[#EBEBEB] dark:border-[#1F1F1F] rounded-none"
                autoFocus
                placeholder="enter email"
                type="email"
                name="email"
                id="email"
                required
              />
              <Label htmlFor="password">Password</Label>
              <Input
                className="border-[#EBEBEB] dark:border-[#1F1F1F] rounded-none"
                placeholder="enter password"
                type="password"
                name="password"
                id="password"
                required
              />
            </CardContent>
            <CardFooter className="flex-col gap-2 pb-2">
              <Button
                disabled={loading}
                className="w-full rounded-none"
                type="submit"
              >
                {loading ? (
                  <Oval
                    visible={true}
                    height="25"
                    width="25"
                    strokeWidth="5"
                    color="white"
                    ariaLabel="oval-loading"
                    secondaryColor="black"
                  />
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

    await fakeLoad();
    setResetPassLoading(true);

    setResetPassLoading(false);
  };
  return (
    <form action={resetPassRequest}>
      <Card className=" rounded-none">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <Label htmlFor="forgotPassEmail">Email</Label>
          <Input
            name="email"
            placeholder="enter your email address"
            required
            autoFocus
            className=" rounded-none"
            id="forgotPassEmail"
            type="email"
          />
        </CardContent>
        <CardFooter className="gap-3">
          <Button
            onClick={() => setForgotPassword(false)}
            variant={"outline"}
            className="w-full rounded-none"
          >
            Back
          </Button>
          <Button className=" rounded-none w-full">
            {resetPassLoading ? (
              <Oval
                visible={true}
                height="25"
                width="25"
                strokeWidth="5"
                color="white"
                ariaLabel="oval-loading"
                secondaryColor="black"
              />
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
