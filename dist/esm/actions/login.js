"use server";
import { cookies } from "next/headers";
import { getEnv } from "./auth";
const LoginUser = async ({
  email,
  password,
  project_id
}) => {
  const key = await getEnv();
  const jwt_secret = process.env.JWT_SECRET;
  try {
    const res = await fetch("https://redshield.vercel.app/api/service/login", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: key
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
        project_id,
        jwt_secret
      })
    });
    const response = await res.json();
    if (response.status) {
      setJWTcookie({ token: response.token });
    }
    return {
      status: response.status || false,
      message: response.message || "something went wrong"
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "something went wrong"
    };
  }
};
const setJWTcookie = ({ token }) => {
  const cookieStore = cookies();
  const date = /* @__PURE__ */ new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1e3);
  cookieStore.set("_auth_token", token, {
    expires: date,
    httpOnly: true,
    sameSite: true
  });
};
export {
  LoginUser
};
//# sourceMappingURL=login.js.map