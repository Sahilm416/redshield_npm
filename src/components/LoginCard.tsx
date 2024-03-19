"use client"
import React from "react";
import { testServer } from "../actions/login";
const LoginCard = () => {
  const handleClick = async () => {
    await testServer();
  };
  return (
    <button className="p-2 bg-red-200 border" onClick={handleClick}>
      LoginCard
    </button>
  );
};

export default LoginCard;
