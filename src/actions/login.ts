"use server";
import { cookies } from "next/headers";
import { getEnv } from "./auth";

export const LoginUser = async ({
  email,
  password,
  project_id,
}: {
  email: string;
  password: string;
  project_id: string;
}) => {
  const key = await getEnv();

  try {
    const res = await fetch("https://redshield.vercel.app/api/service/login", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
        project_id: project_id,
      }),
    });
    const response = (await res.json()) as {
      status: boolean;
      message: string;
      token: string;
    };
    if(response.status){
      setJWTcookie({token: response.token});
    }
    return {
      status: response.status || false,
      message: response.message || "something went wrong",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong",
    };
  }
};

const setJWTcookie = ({ token }: { token: string }) => {
  const cookieStore = cookies();
  const date = new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  cookieStore.set("_auth_token", token, {
    expires: date,
    httpOnly: true,
    sameSite: true,
  });
};