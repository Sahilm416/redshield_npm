"use client";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "./ui/card";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { registerUser, sendCode, verifyCode } from "../actions/register";
import { checkPassword } from "../actions/check";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterCard({
  project_name,
  project_id,
}: {
  project_name: string;
  project_id: string;
}) {
  const [formCount, setFormCount] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <Card className="redshield-bg-white redshield-px-2 redshield-h-auto redshield-shadow-lg redshield-rounded-none">
        <CardHeader>
          <CardTitle>Register to {project_name}</CardTitle>
          <CardDescription>redis based auth</CardDescription>
        </CardHeader>
        {formCount === 1 ? (
          <Form1 setFormCount={setFormCount} setEmail={setEmail} />
        ) : formCount === 2 ? (
          <Form2 setFormCount={setFormCount} email={email} />
        ) : (
          <Form3 email={email} project_id={project_id} />
        )}
      </Card>
    </>
  );
}

const Form1 = ({
  setFormCount,
  setEmail,
}: {
  setFormCount: Dispatch<SetStateAction<1 | 2 | 3>>;
  setEmail: Dispatch<SetStateAction<string>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const sendData = async (formData: FormData) => {
    const mail = formData.get("email") as string;
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
  return (
    <>
      <form action={sendData}>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input
            className="redshield-rounded-none"
            required
            id="email"
            name="email"
            type="email"
            placeholder="enter your email"
          />
        </CardContent>
        <CardFooter>
          <Button
            disabled={loading}
            type="submit"
            className="redshield-w-full redshield-rounded-none"
          >
            {loading ? (
              <Loader2 className="redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" />
            ) : (
              "continue"
            )}
          </Button>
        </CardFooter>
      </form>
    </>
  );
};

const Form2 = ({
  setFormCount,
  email,
}: {
  setFormCount: Dispatch<SetStateAction<1 | 2 | 3>>;
  email: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const sendData = async (formData: FormData) => {
    const code = formData.get("code") as string;
    await fakeLoad();
    setLoading(true);
    const res = await verifyCode({ code: code, email: email });
    if (res.status) {
      toast.success(res.message);
      setFormCount(3);
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };
  return (
    <>
      <form action={sendData}>
        <CardContent className="redshield-flex redshield-flex-col redshield-gap-3">
          <p className="redshield-text-sm redshield-text-slate-400">
            enter the code sent to <br />
            <span className="redshield-text-slate-700">
              {email}
            </span>{" "}
          </p>
          <Input
            className="redshield-rounded-none"
            name="code"
            type="text"
            required
            placeholder="enter code"
          />
        </CardContent>
        <CardFooter className="redshield-flex redshield-gap-3">
          <Button
            onClick={() => setFormCount(1)}
            type="button"
            className="redshield-w-[50%] redshield-rounded-none"
            variant={"outline"}
          >
            back
          </Button>
          <Button
            disabled={loading}
            type="submit"
            className="redshield-w-[50%] redshield-rounded-none"
          >
            {loading ? (
              <Loader2 className="redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" />
            ) : (
              "submit"
            )}
          </Button>
        </CardFooter>
      </form>
    </>
  );
};

const Form3 = ({
  email,
  project_id,
}: {
  email: string;
  project_id: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const createUser = async (formData: FormData) => {
    const pass = formData.get("pass") as string;
    const confirmPass = formData.get("confirm") as string;
    if (pass === confirmPass) {
      const validation = await checkPassword({ password: pass });
      if (validation.status) {
        setLoading(true);

        const res = await registerUser({
          email: email,
          password: pass,
          project_id: project_id,
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
  return (
    <>
      <form action={createUser}>
        <CardContent className="redshield-flex redshield-flex-col redshield-gap-3">
          <Label htmlFor="pass">Password</Label>
          <Input
            className="redshield-rounded-none"
            name="pass"
            id="pass"
            type="password"
          />
          <Label htmlFor="confirm">Confirm Password</Label>
          <Input
            className="redshield-rounded-none"
            name="confirm"
            id="confirm"
            type="password"
          />
        </CardContent>
        <CardFooter>
          <Button
            disabled={loading}
            type="submit"
            className="redshield-w-full redshield-rounded-none"
          >
            {loading ? (
              <Loader2 className="redshield-animate-[spin_0.4s_linear_infinite] redshield-w-[27px] redshield-h-[27px]" />
            ) : (
              "create account"
            )}
          </Button>
        </CardFooter>
      </form>
    </>
  );
};
//fake loading
const fakeLoad = async () => {
  return;
};
