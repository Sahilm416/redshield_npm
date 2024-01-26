import "./output.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import LoginCard from "./components/LoginCard";
import RegisterCard from "./components/RegisterCard";
import React from "react";
import { getProject } from "./actions/auth";

export default async function TestPage() {
  const project = await getProject();
  if (!project.status) {
    return (
      <div className="w-full h-screen flex justify-center items-center absolute top-0 right-0 bg-black/60">
        <div className="w-[90vw] max-w-[400px] h-[300px] rounded-md bg-red-700 flex flex-col gap-5 justify-center items-center text-center">
          <h1 className="text-3xl text-white">Error Loading project</h1>
          <p className="text-lg text-white">{project.message}</p>
          <p className="text-zinc-200">(please check env)</p>
        </div>
      </div>
    );
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
          <LoginCard project_name={project.project_name} />
        </TabsContent>
        <TabsContent value="register">
          <RegisterCard project_name={project.project_name} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
