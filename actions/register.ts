"use server";

import { getEnv } from "./auth";
import { LoginUser } from "./login";

export const sendCode = async ({ email }: { email: string }) => {
  const code = Math.floor(100000 + Math.random() * 900000);
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

    // await db.set(project_id + ":" + email + ":code", code, { ex: 180 });
    const res = await fetch(
      "https://redshield.vercel.app/api/service/sendCode",
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.RED_KEY!,
        },
        body: JSON.stringify({
          email: email,
          code: code,
        }),
      }
    );

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
              password: data.password
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