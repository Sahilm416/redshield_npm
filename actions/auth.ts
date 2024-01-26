"use server";
import { cookies } from "next/headers";

export const getEnv = async () => {
  return process.env.Red_key!;
};

export const getProject = async () => {
  try {
    const key = await getEnv();
    if (!key) {
      throw new Error("please provide a key");
    }
    const res = await fetch(
      "https://redshield.vercel.app/api/service/getProject",
      {
        headers: {
          Authorization: key,
        },
      }
    );

    const response = await res.json();

    if (response.status) {
      return {
        status: true,
        project_name: response.project_name,
        project_id: response.project_id,
      };
    }
    return {
      status: false,
      message: response.message,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong",
    }
  }
};

export const verifyJWT = async ({ token }: { token: string | undefined }) => {
  try {
    const key = await getEnv();
    const res = await fetch("https://redshield.vercel.app/api/service/verify", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: key,
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    const response = await res.json();
    return response
  } catch (error) {
    console.log(error)
    return {
      status: false,
      message: "something went wrong"
    }
  }
};

export const getSession = async () => {
  const store = cookies();

  const token = store.get("_auth_token")?.value;
  if (!token) {
    return {
      status: false,
      message: "session token not found",
    };
  }

  try {
    const res = await verifyJWT({token: token});
    return {
      status: res.status,
      message: res.message,
      data: res.data,
    };
  } catch (error) {
    console.log("error verifying token: " + error);

    return {
      status: false,
      message: "token signature invalid",
    };
  }
};

export const LogOut = async () => {
  const store = cookies();
  store.delete("_auth_token");
  return {
    status: true,
    message: "logged out successfully",
  };
};

export const resetPassword = async () => {};
