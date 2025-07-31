import React, { useEffect, useState } from "react";
import axios from "axios";
import Error_res from "../pages/Error_res";
import Loading from "../pages/Loading";
const Products = () => {
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(null)
  const [products,setProducts]=useState([])
  useEffect(()=>{
    setLoading(true)
    axios 
    .get("https://dummyjson.com/products")
    .then((res)=>setProducts(res.data.products))
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
        {Array.isArray(products) &&
          products.map((product) => (
            <div
              key={product.id}
              className="shadow-lg rounded-lg overflow-hidden flex flex-col bg-white cursor-pointer product"
              
            >
              <div className="h-48 flex items-center justify-center p-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-4 flex-col justify-between flex-grow">
                <p className="text-blue-500 font-black">${product.price}</p>
                <h2
                  title={product.title}
                  className="font-bold line-clamp-1 my-2 text-sm"
                >
                  {product.title}
                </h2>
                <p className="bg-gray-200 text-sm">
                  {product.rating}⭐ ({product.stock})
                </p>
              </div>
            </div>
          ))}
      </div>

    </div>
        
       

      
  );
};

export default React.memo(Products);
