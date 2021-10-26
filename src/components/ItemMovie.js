import React, { useState,useEffect } from 'react'


export default function ItemMovie(props) {

    const {name,image,description,director} = props
    
    const disrector_Movie = director.map(d=>{
        return d.name
    }) 

    const description_Movie = description.slice(0, 100)

    return (
      <div className=" md:flex bg-gray-100 rounded-xl border-2 border-black p-8 md:p-0 m-2">
        <img className="w-32 h-32 rounded-full mx-auto md:mx-0 md:w-48 md:h-auto md:rounded-lg " src={image} alt width={384} height={512} />
        
        <div className="bg-blue-300  w-full md:p-8   md:text-left space-y-4">
          
            <div className="text-black text-center font-bold border-black border-2 p-2">
              {name}
            </div>
            <div className="text-gray-500 text-center md:text-left">
              {disrector_Movie}
            </div>
          
        </div>
      </div>

    )
}

