import React, { useState } from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState(false);

    function handleToggle(){
        setToggle(!toggle);

        console.log(toggle);
    }

  return (
    <div>
       <button onClick={handleToggle}> Toggle </button>

       <ul className={`${toggle ? '' : 'hidden'}`}>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
       </ul>
    </div>
  )
}

export default Toggle
