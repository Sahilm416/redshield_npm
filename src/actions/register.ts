"use server";

import { getEnv } from "./auth";
import { LoginUser } from "./login";

export const sendCode = async ({ email }: { email: string }) => {
  const key = await getEnv();
  try {
    const exist = await fetch(
      "https://redshield.vercel.app/api/service/exist",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    const existResponse = await exist.json();

    if (!existResponse.status) {
      return {
        status: false,
        message: existResponse.message,
      };
    }

    await fetch("https://redshield.vercel.app/api/service/sendCode", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    return {
      status: true,
      message: "email sent successfully",
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      message: "error sending email",
    };
  }
};

export const verifyCode = async ({
  code,
  email,
}: {
  code: string;
  email: string;
}) => {
  const key = await getEnv();
  try {
    const res = await fetch(
      "https://redshield.vercel.app/api/service/verifyCode",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify({
          email: email,
          code: code,
        }),
      }
    );

    const response = await res.json();
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

export const registerUser = async (data: {
  email: string;
  password: string;
  project_id: string;
  profile_picture?: string;
}) => {
  const key = await getEnv();
  try {
    const res = await fetch(
      "https://redshield.vercel.app/api/service/register",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          project_id: data.project_id,
        }),
      }
    );

    const response = await res.json();
    if (response.status) {
      await LoginUser({
        email: data.email,
        password: data.password,
        project_id: data.project_id,
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
