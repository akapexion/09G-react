import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Data = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {

        try {
        const response = await axios.get("https://dummyjson.com/products");

        console.log(response.data.products);
        setProducts(response.data.products);
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(()=> {
    fetchProducts();
    }, []);

    return (
        <>
            <div className='container grid grid-cols-3 place-items-center'>

                {products.map((e) => (
                    <div className='border border-gray-300 shadow-md p-3'>

                        <img src={e.thumbnail} alt="" />

                        <p>{e.title}</p>
                        <p>{e.price}</p>

                    </div>
                ))}


            </div>
        </>
    )
}

export default Data
