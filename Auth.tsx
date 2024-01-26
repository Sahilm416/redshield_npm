import "./output.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import LoginCard from "./components/LoginCard";
import RegisterCard from "./components/RegisterCard";
import React from "react";

export default function TestPage() {
  return (
    <div className="flex flex-col items-center mb-auto mt-[100px]">
      <Tabs className=" w-[90vw] max-w-[400px]" defaultValue="login">
        <TabsList className="grid dark:bg-slate-900 w-full grid-cols-2 rounded-none">
          <TabsTrigger className=" rounded-none" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className=" rounded-none" value="register">
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginCard project_name={"test"} />
        </TabsContent>
        <TabsContent value="register">
          <RegisterCard project_name={"test"} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
