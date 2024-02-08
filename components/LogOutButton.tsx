import React from "react";
import { LogOut } from "../actions/auth";

export default function LogOutButton({ className }: { className?: string }) {
  return (
    <div>
      <button
        className={className}
        onClick={async () => {
          await LogOut();
          return window.location.reload();
        }}
      >
        logout
      </button>
    </div>
  );
}
