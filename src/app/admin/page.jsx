"use client";
import React from "react";
// import Login from "@/admin/Login";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Admin = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("adminAuth")) {
      router.push("/adminlogin");
    }
  }, [router]);
  return <div>admin</div>;
};

export default Admin;
