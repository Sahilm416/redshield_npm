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
      <div className="redshield-w-full redshield-h-screen redshield-absolute redshield-top-0 redshield-right-0 redshield-bg-black/95 redshield-overflow-hidden redshield-z-50 redshield-flex redshield-text-center redshield-justify-center redshield-items-center">
        <div className="redshield-w-full redshield-max-w-[400px] redshield-p-5 redshield-border redshield-border-red-600 redshield-bg-black redshield-text-red-600">
          Error loading AUTH UI <br />
          {project.message}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Tabs className="redshield-w-[90vw] redshield-max-w-[400px]" defaultValue="login">
        <TabsList className="redshield-grid redshield-bg-slate-900 redshield-w-full redshield-grid-cols-2 redshield-rounded-md">
          <TabsTrigger className="redshield-rounded-md" value="login">
            Login
          </TabsTrigger>
          <TabsTrigger className="redshield-rounded-md" value="register">
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