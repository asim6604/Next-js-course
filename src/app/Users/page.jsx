// app/users/page.tsx (Server Component)
import Link from "next/link";

export default async function UserPage() {
  // Fetching data on the server
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const users = data.users;

  return (
    <>
      <h1>Users (SSR)</h1>
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
}
