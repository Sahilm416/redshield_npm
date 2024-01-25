"use client";
import React from "react";
import { LogOut } from "../actions/auth";
import { useRouter } from "next/navigation";
export default function LogOutButton({ className }: { className: string }) {
  const router = useRouter();
  return (
    <div>
      <button
        className={className}
        onClick={async () => {
          await LogOut();
          return router.refresh();
        }}
      >
        logout
      </button>
    </div>
  );
}
