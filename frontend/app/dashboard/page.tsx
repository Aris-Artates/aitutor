"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import PrivacyFloating from "@/components/privacyfloating";

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("fb_token");
    if (token) {
      fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`)
        .then((res) => res.json())
        .then(async (data) => {
          setProfile(data);

          // Store user in Supabase (frontend-only for testing)
          await supabase.from("users").upsert({
            facebook_id: data.id,
            name: data.name,
            email: data.email,
            access_token: token,
          });
        });
    } else {
      // If no token, redirect to landing page
      window.location.href = "/";
    }
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <h2>Welcome, {profile.name}</h2>
      <p>Email: {profile.email}</p>

      <PrivacyFloating />

      <h2 className="mt-12 text-2xl font-semibold">Live Group Stream</h2>
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/YOUR_GROUP_VIDEO_ID/&show_text=false"
        width="560"
        height="315"
        style={{ border: "none", overflow: "hidden" }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
}