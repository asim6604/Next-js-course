"use client"; // 🔥 Add this line at the top

import { useParams } from "next/navigation"; // Import useParams to access dynamic route parameters
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function UserPage() {
  const router = useRouter(); // Initialize useRouter hook
  const params = useParams(); // Initialize useParams to get dynamic route params

  const goToSettings = () => {
    // Construct the URL with query parameters
    const url = `/about/${params.username}/settings?user=${params.username}`;
    router.push(url); // Navigate to the constructed URL
  };

  return (
    <>
      <h1>Username: {params.username}</h1> {/* Display the username (replace with dynamic value) */}
      <button onClick={goToSettings}>Go to settings</button> 
       {/* Button to go to settings */}
       <button onClick={
        () => router.replace('/')}>
       Go to homePage</button>
    </>
  );
}
