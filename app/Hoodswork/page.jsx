import React from 'react'

function Hoodswork () {

  const [add, useState] = useState(0)
  function increase () {
    return setAdd(prev => prev + 1)
    }
    function decrease () {
      return setAdd(prev => prev - 1)
      }

  return (
     
    <div>
    <p>{add}</p>
    <button onClick={increase} className="font-serif text-white shadow-2xl h-11 w-20 bg-purple-600 rounded-full hover:bg-lime-400 hover:text-sky-500">+</button>
    <button onClick={decrease} className="font-serif text-white shadow-2xl h-11 w-20 bg-purple-600 rounded-full hover:bg-lime-400 hover:text-sky-500">-</button>
    
    </div>
  )
}

export default Hoodswork
