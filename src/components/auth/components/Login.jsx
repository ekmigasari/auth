"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();

  return (
    <main className="space-y-3">
      <Input placeholder="email@domain.com" onChange={handleChange} />
      <Input placeholder="Password" onChange={handleChange} />
      <Button color="primary" onClick={handleSubmitLogin}>
        Login
      </Button>
      <div className="flex gap-1">
        <div>Don't have an account?</div>
        <Link href="/register">Register</Link>
      </div>
    </main>
  );
};
