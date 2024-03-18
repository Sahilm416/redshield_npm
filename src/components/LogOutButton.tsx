"use client";
import React from "react";
import { testServer } from "../actions/login";

const LogOutButton = () => {
  return (
    <button
      onClick={async () => {
        await testServer();
      }}
      className="bg-green-200 text-green-700 border border-green-700 p-1"
    >
      log out
    </button>
  );
};

export default LogOutButton;
