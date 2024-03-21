"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
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

type paramTypes = {
  status: boolean;
  message: string;
  email: string;
  token: string;
};
export default function ResetPassComponent({ data }: { data: paramTypes }) {
  return (
    <>
      {data.status ? <ResetPass data={data} /> : <InvalidLink />} <Toaster richColors position="bottom-right"/>
    </>
  );
}

const ResetPass = ({ data }: { data: paramTypes }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const sendData = async (formData: FormData) => {
    const password = formData.get("reset_pass") as string;
    const confirm_password = formData.get("confirm_reset_pass") as string;

    if (password.trim() === confirm_password.trim()) {
      const checkInputPassword = await checkPassword({ password: password });
      if (checkInputPassword.status) {
        await fakeLoad();
        setLoading(true);
        const res = await changePassword({
          password: password,
          email: data.email,
          token: data.token,
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
  return (
    <>
      <form action={sendData}>
        <Card className="redshield-w-[90vw] redshield-max-w-[450px] redshield-shadow-lg redshield-rounded-none redshield-bg-white bg-gray-900/20">
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="redshield-flex redshield-flex-col redshield-gap-4">
            <Label htmlFor="resetpass">New password</Label>
            <Input
              required
              name="reset_pass"
              id="resetpass"
              type="password"
              className="redshield-rounded-none"
            />
            <Label htmlFor="confirmresetpass">Confirm Password</Label>
            <Input
              required
              name="confirm_reset_pass"
              id="confirmresetpass"
              type="password"
              className="redshield-rounded-none"
            />
          </CardContent>
          <CardFooter className="redshield-justify-end">
            <Button
              disabled={loading}
              type="submit"
              className="redshield-w-[150px] redshield-rounded-none"
            >
              {loading ? (
                <Loader2 className="redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]"/>
              ) : (
                "Save"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
};

const InvalidLink = () => {
  return (
    <div className="redshield-w-full redshield-h-screen redshield-flex redshield-justify-center redshield-items-center">
      <p>Invalid link</p>
    </div>
  );
};
const fakeLoad = async () => {
  return;
};
