import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {

  const [productsData, setProductsData] = useState([]);

  const fetchProducts = async() => {
    try{
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);

      setProductsData(response.data.products);
    }
    catch(abc){
      console.log(abc); 
    }
  }


  useEffect(() => {
  fetchProducts();
  }, []);


  return (
    <div>

      {productsData.map((p) => (
        <div>
          
          <p>{p.title}</p>
          <img src={p.thumbnail} alt="" />
        
        </div>
      ))}
    
    </div>
  )
}

export default Products
