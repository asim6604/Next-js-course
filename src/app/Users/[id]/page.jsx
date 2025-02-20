"use client"; // Client component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
const IdPage = () => {

  const { id } = useParams(); // Get the user ID from the URL
 const fetcher=(...argu)=>fetch(...argu).then ((res)=>res.json());
 const {data,error}=useSWR(`https://dummyjson.com/users/${id}`,fetcher);

  

  
  return (
    <>
      <h1>User Details</h1>
      {data ? (
        <div>
          <h2>Name: {data.firstName}</h2>
          <h3>Email: {data.email}</h3>
        </div>
      ) : (
        <p>Loading...</p> // Show loading until data arrives
      )}
    </>
  );
};

export default IdPage;
