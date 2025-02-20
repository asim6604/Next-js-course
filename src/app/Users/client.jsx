 
import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";
const UserPage = () => {
  const [users, setUsers] = useState([]);
  const fetcher=(...argu)=>fetch(...argu).then((res)=>res.json());
    const {data,error}=useSWR("https://dummyjson.com/users");
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

    fetchUsers();  // ✅ Call the function inside useEffect
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {
            users.map((user)=>{
                return <Link href={`/Users/${user.id}`} key={user.id}><div>
                    {user.firstName} {user.lastName}</div></Link>;
            })
        }
      </ul>
    </>
  );
};

export default UserPage;
