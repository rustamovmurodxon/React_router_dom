import React, { useEffect, useState } from "react";
import Loading from "../pages/Loading";
import Error_res from "../pages/Error_res";
import axios from "axios";

const Users = () => {
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [users,setUsers]=useState([])
  useEffect(()=>{
    setLoading(true)
    axios 
    .get("https://dummyjson.com/users")
    .then((res)=>setUsers(res.data.users))
    .catch(err=>{
      setError(err.message)
    })
    .finally(()=>{
      setLoading(false);
    })
    
  },[])

  return (
    <>
    <div>
    {error && <Error_res />}
    {loading && <Loading />}

    <div className="container mx-auto p-10 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6">
        {Array.isArray(users) &&
          users.map((user) => (
            <div
              key={user.id}
              className="shadow-lg rounded-lg overflow-hidden flex flex-col bg-white cursor-pointer product"
              
            >
              <div className="h-48 flex items-center justify-center p-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-4 flex-col justify-between flex-grow">
              <h1
                  title={user.firstName}
                  className="font-bold line-clamp-1 my-2 text-sm"
                >
                  {user.firstName}{user.lastname}
                </h1>
                <p>Age: <strong>{user.age}</strong> </p>
                <p className="line-clamp-1">{user.email}</p>
                <p>Phone: <strong>{user.phone} </strong> </p>
                <p>Username: <strong>{user.username}</strong></p>
                <p>{user.birthDate} </p>
              </div>
            </div>
          ))}
      </div>
    </div>

      
    </>
  );
};

export default Users;
