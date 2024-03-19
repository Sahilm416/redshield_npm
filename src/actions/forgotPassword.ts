"use server";

import { getEnv } from "./auth";

export const sendResetPasswordLink = async ({
  email,
  url,
}: {
  email: string;
  url: string;
}) => {
  try {
    const key = await getEnv();
    const res = await fetch(
      "https://redshield.vercel.app/api/service/resetPassword",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify({
          email: email.trim(),
          endpoint: `${url}/ResetPassword`,
        }),
      }
    );

    const response = (await res.json()) as { status: boolean; message: string };

    return {
      status: response.status,
      message: response.message,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "sometghing went wrong",
    };
  }
};

export const checkResetPasswordToken = async ({ token }: { token: string }) => {
  try {
    const key = await getEnv();
    const res = await fetch(
      "https://redshield.vercel.app/api/service/checkPasswordToken",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify({
          token: token,
        }),
      }
    );

    const response = (await res.json()) as {
      status: boolean;
      message: string;
      data: string;
    };
    return {
      status: response.status,
      message: response.message,
      email: response.data,
      token: token,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong",
      email: "",
      token: "",
    };
  }
};

export const changePassword = async ({
  password,
  email,
  token,
}: {
  password: string;
  email: string;
  token: string;
}) => {
  try {
    const key = await getEnv();
    const res = await fetch(
      "https://redshield.vercel.app/api/service/changePassword",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify({
          token: token,
          email: email,
          password: password,
        }),
      }
    );
    const response = (await res.json()) as { status: boolean; message: string };
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