import React from "react";
import ResetPassComponent from "./ResetPassComponent";
import { checkResetPasswordToken } from "../actions/forgotPassword";

export default async function ResetPassPage({ token }: { token: string }) {
  const tokenValidation = await checkResetPasswordToken({ token: token });
  return (
    <div className="redshield-w-full redshield-max-w-[450px]">
      <ResetPassComponent data={tokenValidation} />
    </div>
  );
}