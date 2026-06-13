import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    // function handleAddition(){
    //     setCount(count+1);
    // }


  return (
    <div>
      {count}

      <button onClick={() => setCount(count+1)}>ADD</button>
      <button onClick={() => setCount(count-1)}>MINUS</button>

      
    </div>
  )
}

export default Counter
