"use client"; // 🔥 Add this line at the top

import { useParams } from "next/navigation";

export default function SettingsPage() {
  const params = useParams(); // Get the username from URL params

  return (
    <>
      <h1>This is {params.username}'s settings</h1>
    </>
  );
}
