import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import LoginCard from "./LoginCard";
import RegisterCard from "./RegisterCard";
import React from "react";
import { Toaster } from "sonner";
import { getProject } from "../actions/auth";

export default async function AuthPage() {
  const project = await getProject();

  if (!project.status) {
    return (
      <div className="w-full h-screen absolute top-0 right-0 bg-black/95 overflow-hidden z-50 flex text-center justify-center items-center">
        <div className="w-full max-w-[400px] p-5 border border-red-600 bg-black text-red-600">
          Error loading AUTH UI <br />
          {project.message}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Tabs className=" w-[90vw] max-w-[400px]" defaultValue="login">
        <TabsList className="grid dark:bg-slate-900 w-full grid-cols-2 rounded-md">
          <TabsTrigger className=" rounded-none" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className=" rounded-dm" value="register">
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginCard
            project_name={project.project_name}
            project_id={project.project_id}
          />
        </TabsContent>
        <TabsContent value="register">
          <RegisterCard
            project_name={project.project_name}
            project_id={project.project_id}
          />
        </TabsContent>
      </Tabs>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
