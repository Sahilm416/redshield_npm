"use server";
import { cookies } from "next/headers";
const getEnv = async () => {
  return process.env.RED_KEY;
};
const getProject = async () => {
  try {
    const key = await getEnv();
    const jwt_secret = process.env.JWT_SECRET;
    if (!key) {
      throw new Error("No api key specified");
    }
    if (!jwt_secret) {
      throw new Error("No jwt secret specified");
    }
    const res = await fetch(
      "https://redshield.vercel.app/api/service/getProject",
      {
        cache: "no-store",
        headers: {
          Authorization: key
        }
      }
    );
    const response = await res.json();
    if (response.status) {
      return {
        status: true,
        message: response.message,
        project_name: response.project_name,
        project_id: response.project_id
      };
    }
    return {
      status: false,
      message: response.message,
      project_id: "",
      project_name: ""
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong",
      project_id: "",
      project_name: ""
    };
  }
};
const getSession = async () => {
  const store = cookies();
  const token = store.get("_auth_token")?.value;
  if (!token) {
    return {
      status: false,
      message: "session token not found"
    };
  }
  try {
    const jwt_secret = process.env.JWT_SECRET;
    const res = await fetch("https://redshield.vercel.app/api/service/verify", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token,
        jwt_secret
      })
    });
    const response = await res.json();
    return {
      status: response.status,
      message: response.message,
      data: response.data
    };
  } catch (error) {
    console.log("error verifying token: " + error);
    return {
      status: false,
      message: "token signature invalid"
    };
  }
};
const LogOut = async () => {
  const store = cookies();
  store.delete("_auth_token");
  return {
    status: true,
    message: "logged out successfully"
  };
};
const resetPassword = async () => {
};
export {
  LogOut,
  getEnv,
  getProject,
  getSession,
  resetPassword
};
//# sourceMappingURL=auth.js.map