"use client";

import { useEffect } from "react";
import FbLoginButton from "@/components/fbloginbutton";

export default function LandingPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      const params = new URLSearchParams(hash.replace("#", ""));
      const token = params.get("access_token");
      if (token) {
        // Store token in localStorage for dashboard usage
        localStorage.setItem("fb_token", token);

        // Redirect to dashboard
        window.location.href = "/dashboard";
      }
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8">Welcome to AI Tutor</h1>
      <FbLoginButton />
    </main>
  );
}