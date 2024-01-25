import "./output.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import LoginCard from "./components/LoginCard";
import RegisterCard from "./components/RegisterCard";
import React from "react";
import Link from "next/link"
import { getProject, getSession } from "./actions/auth";

export default async function TestPage() {
  const res = await getProject();
  if (!res?.status) {
    return (
      <div>
        <p>{res?.message}</p>
      </div>
    );
  }
  const session = await getSession();
  if(session.status){
     return (
      <div className="flex flex-col justify-center items-center">
           <p className="text-3xl ">Already Logged In</p>
          <Link className="p-5 rounded-md" href={'/'}>Back to home</Link>
      </div>
     )
  }
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
          <LoginCard project_name={res.project_name} />
        </TabsContent>
        <TabsContent value="register">
          <RegisterCard project_name={res.project_name} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
