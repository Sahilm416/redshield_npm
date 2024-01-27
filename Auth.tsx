"use client";
import "./output.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import LoginCard from "./components/LoginCard";
import RegisterCard from "./components/RegisterCard";
import React, { useEffect, useState } from "react";
import { getProject } from "./actions/auth";
import { Toaster } from "sonner";

type projectType = {
  status: boolean;
  message: string;
  project_id: string;
  project_name: string;
};
export default function TestPage() {
  const [project, setProject] = useState<projectType>({
    status: false,
    message: "",
    project_id: "",
    project_name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = (await getProject()) as projectType;
        setProject(projectData);
      } catch (error) {
        console.error("Error loading project:", error);
      }
    };

    fetchData();
  }, []);

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
        <Toaster richColors position="bottom-right" />
      </div>
    );
}
