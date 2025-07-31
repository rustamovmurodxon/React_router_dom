import React, { useEffect, useState } from "react";
import Error_res from "./Error_res";
import Loading from "./Loading";
import axios from "axios";
const Food = () => {
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [recipes,setRecipes]=useState([])
  useEffect(()=>{
    setLoading(true)
    axios
    .get("https://dummyjson.com/recipes")
    .then((res)=>setRecipes(res.data.recipes))
    .catch(err=>{
      setError(err.message)
    })
    .finally(()=>{
      setLoading(false);
    })
    
  },[])
  return (
    <div>
    {error && <Error_res />}
    {loading && <Loading />}

    <div className="container mx-auto p-10 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6">
        {Array.isArray(recipes) &&
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="shadow-lg rounded-lg overflow-hidden flex flex-col bg-white cursor-pointer product"
              
            >
              <div className="h-48 flex items-center justify-center p-4">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-4 flex-col justify-between flex-grow">
              <h2
                  title={recipe.name}
                  className="font-bold line-clamp-1 my-2 text-sm"
                >
                  {recipe.name}
                </h2>
                <p className="bg-gray-200 text-sm">
                  {recipe.rating}⭐ 
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Food);
