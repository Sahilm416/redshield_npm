"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function LoginCard() {
  return (
    <Card className=" dark:bg-gray-900/20 bg-white p-2 h-[380px] shadow-lg rounded-none">
      <form>
        <CardHeader>
          <CardTitle>Login to Redshield</CardTitle>
          <CardDescription>redis based auth</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            className=" rounded-none"
            autoFocus
            placeholder="enter email"
            type="email"
            name="email"
            id="email"
            required
          />
          <Label htmlFor="password">Password</Label>
          <Input
            className=" rounded-none"
            placeholder="enter password"
            type="password"
            name="password"
            id="password"
            required
          />
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full rounded-none" type="submit">
            login
          </Button>
          <Button variant={"link"}>forgot password</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
