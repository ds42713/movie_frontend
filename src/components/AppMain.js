import React, {useState , useEffect} from 'react'

import ItemMovie from './ItemMovie';

function AppMain(props) {

  const {movieData} = props
 
  const movieElements = movieData.map((movie)=>{
    return <ItemMovie 
    name={movie.name} 
    image={movie.image} 
    description={movie.description} 
    key={movie.id} 
    director={movie.director}
    />
})
    return (

        <div className="">
          <div className="grid grid-cols-1 row-auto md:grid-cols-2 2xl:grid-cols-4 bg-yellow-500">
            { movieElements }
          </div>
            
        </div>
    )
}
export default AppMain;