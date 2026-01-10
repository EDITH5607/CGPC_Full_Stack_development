import axios from "axios";
import React,{useEffect,useState} from "react";
const Products = ()=>{
      const baseUrl = import.meta.env.VITE_BACKEND_API
      const [data,setData] = useState([])
      const [error,setError] = useState()
      console.log(baseUrl)
      useEffect(()=>{
            const fetchData = async()=>{
                  try{
                        const response = await axios.get(`${baseUrl}/products`)
                        setData(response?.data?.data)
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