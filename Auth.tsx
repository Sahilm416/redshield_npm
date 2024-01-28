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
  project_name: string;
  project_id: string;
};
export default function AuthPage() {
  const [project, setProject] = useState<projectType>({
    status: true,
    message: "",
    project_name: "",
    project_id: "",
  });
  useEffect(() => {
    const fetchProject = async () => {
      const res = (await getProject()) as projectType;
      setProject(res);
    };
    fetchProject();
  }, []);
  if (!project.status) {
    return (
      <div className="w-full h-screen absolute flex justify-center items-center bg-black ">
        <div className="w-[90vw] max-w-[450px] h-[200px] flex flex-col justify-center items-center border border-blue-700 bg-gray-900/20">
          <p className="text-2xl text-white">{project.message}</p>
          <p className="text-zinc-200">
            visit{" "}
            <a
              className="text-blue-700"
              target="blanc"
              href="https://redshield.vercel.app"
            >
              redshield{" "}
            </a>
            to get a key
          </p>
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
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
