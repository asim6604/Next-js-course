"use client"; // ✅ Marks this as a client component

import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  if (error) return <p>Failed to load users.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h1>Users (Client-Side Rendering)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
