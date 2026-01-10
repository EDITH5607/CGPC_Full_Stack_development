import axios from "axios";
import React,{useEffect,useState} from "react";
const Products = ()=>{
      const baseUrl = import.meta.env.VITE_BACKEND_API
      console.log(baseUrl)
      useEffect(()=>{
            const fetchData = async()=>{
                  try{
                        const response = await axios.get(`${baseUrl}/products`)
                        console.log(response.data)
                  }
                  catch (error){
                        console.log(error)
                  }
            }
            fetchData()
      },[])
      return (
        <div>
          <h1>Products</h1>
          {/* You can now map through your products here */}
        </div>
      );

}

export default Products