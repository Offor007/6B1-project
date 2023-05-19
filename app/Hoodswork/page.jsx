"use client";
import React, { useState } from 'next'

const Hoodswork = () => {

  const [add, setAdd] = useState('');
  
  return (
     
    <div>
    <p>{add}</p>
    <button onClick={() =>{setAdd(add + 1)}} className="font-serif text-white shadow-2xl h-11 w-20 bg-purple-600 rounded-full hover:bg-lime-400 hover:text-sky-500">+</button>
    <button onClick={() => {setAdd(add - 1)}} className="font-serif text-white shadow-2xl h-11 w-20 bg-purple-600 rounded-full hover:bg-lime-400 hover:text-sky-500">-</button>
    
    </div>
  )
}

export default Hoodswork
