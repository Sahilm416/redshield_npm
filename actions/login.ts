"use server";
import { cookies } from "next/headers";
import { getEnv } from "./auth";

export const LoginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
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
      }),
    });
    const response = (await res.json()) as {
      status: boolean;
      message: string;
      token: string;
    };
    if (response.status) {
      await setToken({
        token: response.token,
      });
    }
    return {
      status: response.status,
      message: response.message,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong",
    };
  }
};

export const setToken = async ({ token }: { token: string }) => {
  try {
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    const store = cookies();
    store.set("_auth_token", token, {
      expires: date,
      httpOnly: true,
      sameSite: true,
      priority: "high",
    });
  } catch (error) {
    console.log(error);
  }
};
