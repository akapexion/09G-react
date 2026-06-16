import React, { useEffect, useState } from 'react'

const API = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
    console.log("Extra Line of Code");
    }, []);

  return (
    <>
        <p>my API Component</p>

        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>ADD</button>
        </div>

    </>
  )
}

export default API
